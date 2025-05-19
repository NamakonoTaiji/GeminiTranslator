// @google/generative-ai ライブラリをインポート
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const DETAILED_LOGGING_ENABLED = true; // デバッグ用ログフラグ

function detailedLog(...args) {
  if (DETAILED_LOGGING_ENABLED) {
    console.log("バックグラウンド:", ...args);
  }
}

detailedLog("Service Worker 起動 (または再起動)");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  detailedLog("'onMessage' リスナー受信:", request);
  if (request.action === "translate") {
    detailedLog("'translate' アクション処理開始");
    handleTranslateRequest(request, sender, sendResponse);
    return true;
  }
  return false;
});

chrome.commands.onCommand.addListener(async (command, tab) => {
  detailedLog(`コマンド「${command}」受信 (タブID: ${tab ? tab.id : "N/A"})`);
  if (command === "translate_selection") {
    // manifest.json のコマンド名
    if (tab && tab.id) {
      try {
        // ★モデル名もストレージから取得するように変更
        const storageItems = await chrome.storage.local.get([
          "defaultTargetLanguage",
          "selectedApiModel",
        ]);
        const targetLang = storageItems.defaultTargetLanguage || "ja";
        const modelNameFromStorage =
          storageItems.selectedApiModel || "gemini-1.5-flash-latest"; // ★デフォルトモデル

        detailedLog(
          `コンテンツスクリプト (${tab.id}) に getSelectionAndTranslate を送信 (コマンド経由)。 targetLang: ${targetLang}, model: ${modelNameFromStorage}`
        );
        // コンテンツスクリプトにはモデル名を渡す必要はない（翻訳依頼はバックグラウンドで行うため）
        // ただし、もし翻訳処理自体をコンテンツスクリプトに指示する場合は渡す必要がある
        const responseFromContentScript = await chrome.tabs.sendMessage(
          tab.id,
          {
            action: "getSelectionAndTranslate",
            targetLang: targetLang,
            // modelName: modelNameFromStorage // ← content.jsがモデル情報を使うなら渡す
          }
        );
        detailedLog(
          "コンテンツスクリプトからの応答 (コマンド経由):",
          responseFromContentScript
        );
      } catch (error) {
        console.error(
          `コンテンツスクリプト (${tab.id}) へのメッセージ送信失敗 (コマンド経由):`,
          error
        );
        if (
          error.message &&
          error.message.includes("Receiving end does not exist")
        ) {
          console.warn(
            "現在のタブではコンテンツスクリプトが実行されていないか、応答がありません。ページをリロードしてみてください。"
          );
        }
      }
    } else {
      console.error("アクティブなタブ情報が取得できませんでした（コマンド）。");
    }
  }
});

async function handleTranslateRequest(request, sender, sendResponse) {
  detailedLog("handleTranslateRequest 開始。リクエスト:", request);
  try {
    detailedLog("ローカルストレージから設定を読み込み開始...");
    // ★モデル名もストレージから取得
    const items = await chrome.storage.local.get([
      "geminiApiKey",
      "defaultTargetLanguage",
      "selectedApiModel",
    ]);
    detailedLog(
      "読み込んだ設定オブジェクト (items):",
      JSON.stringify(items, null, 2)
    );

    const apiKey = items.geminiApiKey;
    detailedLog("--- APIキーチェック開始 ---");
    detailedLog(
      "typeof apiKey:",
      typeof apiKey,
      ", apiKey の値:",
      apiKey,
      ", !apiKey の評価結果:",
      !apiKey
    );
    detailedLog("--- APIキーチェック終了 ---");

    const textToTranslate = request.text;
    const targetLanguage =
      request.targetLang || items.defaultTargetLanguage || "ja";
    const modelName = items.selectedApiModel || "gemini-2.0-flash"; // ★保存されたモデル名を使用、なければデフォルト
    detailedLog(
      "翻訳対象テキスト:",
      textToTranslate,
      "翻訳先言語:",
      targetLanguage,
      "使用モデル:",
      modelName
    );

    if (!apiKey) {
      const errorMsg =
        "APIキーが設定されていません。オプションページで設定してください。";
      console.error("バックグラウンド: " + errorMsg);
      sendResponse({ error: errorMsg });
      return;
    }

    detailedLog(`APIキー確認OK、Gemini API呼び出し準備 (モデル: ${modelName})`);
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: modelName, // ★動的に設定されたモデル名を使用
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });

    const prompt = `以下の「テキスト」を自然な「${targetLanguage}」に翻訳してください。翻訳されたテキストのみを返してください。\n\nテキスト：\n${textToTranslate}`;
    detailedLog("Geminiへのプロンプト:", prompt);

    const result = await model.generateContent(prompt);
    const generationResponse = result.response;

    if (!generationResponse) {
      let blockReason = "不明な理由 (レスポンスなし)";
      let safetyRatingsInfo = "N/A";
      if (result.response && result.response.promptFeedback) {
        if (result.response.promptFeedback.blockReason) {
          blockReason = result.response.promptFeedback.blockReason;
        }
        if (result.response.promptFeedback.safetyRatings) {
          safetyRatingsInfo = JSON.stringify(
            result.response.promptFeedback.safetyRatings
          );
        }
      }
      const errorMsg = `翻訳リクエストがブロックされたか、レスポンスがありませんでした (使用モデル: ${modelName})。理由: ${blockReason}, SafetyRatings: ${safetyRatingsInfo}`;
      console.error("バックグラウンド: " + errorMsg, result);
      sendResponse({ error: errorMsg });
      return;
    }

    const translatedText = generationResponse.text();
    detailedLog(`翻訳成功 (モデル: ${modelName}):`, translatedText);
    sendResponse({ translatedText: translatedText.trim() });
  } catch (error) {
    console.error("バックグラウンド: 翻訳処理中の包括的なエラー:", error);
    let errorMessage = `翻訳処理中に予期せぬエラーが発生しました (使用モデル: ${
      items.selectedApiModel || "デフォルト"
    })。`;
    if (error.message) {
      errorMessage += ` ${error.message}`;
    }
    if (
      error.name === "GoogleGenerativeAIResponseError" ||
      (error.toString &&
        error.toString().includes("[GoogleGenerativeAI Error]"))
    ) {
      console.error(
        "GoogleGenerativeAI Error details:",
        error.message,
        error.stack,
        error
      );
      errorMessage = `Gemini APIエラー (使用モデル: ${
        items.selectedApiModel || "デフォルト"
      }): ${error.message}`;
    }
    sendResponse({ error: errorMessage });
  }
}

chrome.runtime.onInstalled.addListener(async (details) => {
  detailedLog("onInstalled イベント:", details);
  if (details.reason === "install") {
    const items = await chrome.storage.local.get([
      "defaultTargetLanguage",
      "targetLanguagePopup",
      "selectedApiModel",
    ]);
    if (!items.defaultTargetLanguage) {
      detailedLog("デフォルトの翻訳先言語を 'ja' に設定します。");
      chrome.storage.local.set({ defaultTargetLanguage: "ja" });
    }
    if (!items.targetLanguagePopup) {
      detailedLog("ポップアップの翻訳先言語を 'ja' に設定します。");
      chrome.storage.local.set({ targetLanguagePopup: "ja" });
    }
    if (!items.selectedApiModel) {
      // ★インストール時にデフォルトモデルを設定
      detailedLog(
        "デフォルトの使用APIモデルを 'gemini-1.5-flash-latest' に設定します。"
      );
      chrome.storage.local.set({ selectedApiModel: "gemini-1.5-flash-latest" });
    }
  }
});
