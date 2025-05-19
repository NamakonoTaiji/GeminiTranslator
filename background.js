// @google/generative-ai ライブラリをインポート
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// --- デバッグ用の詳細ログ設定 ---
// 詳細なログを見る必要がなくなったら、以下のフラグを false にしてください。
const DETAILED_LOGGING_ENABLED = true;

function detailedLog(...args) {
  if (DETAILED_LOGGING_ENABLED) {
    console.log("バックグラウンド:", ...args);
  }
}

detailedLog("Service Worker 起動 (または再起動)");

// --- メインのメッセージリスナー (コンテンツスクリプトからのリクエストを処理) ---
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  detailedLog("'onMessage' リスナー受信:", request);

  if (request.action === "translate") {
    detailedLog("'translate' アクション処理開始");
    handleTranslateRequest(request, sender, sendResponse);
    return true; // 非同期処理のため true を返す
  }
  // 他のメッセージタイプがあればここに追加
  return false; // このリスナーがこれ以上メッセージを処理しないことを示す
});

// --- ショートカットキーコマンドのリスナー ---
chrome.commands.onCommand.addListener(async (command, tab) => {
  detailedLog(`コマンド「${command}」受信 (タブID: ${tab ? tab.id : "N/A"})`);

  // manifest.json で定義したコマンド名と一致させる
  if (command === "translate_selection") {
    // ← manifest.json で定義したコマンド名
    if (tab && tab.id) {
      try {
        const storageItems = await chrome.storage.local.get([
          "defaultTargetLanguage",
        ]);
        const targetLang = storageItems.defaultTargetLanguage || "ja"; // デフォルトは日本語

        detailedLog(
          `コンテンツスクリプト (${tab.id}) に getSelectionAndTranslate を送信 (コマンド経由)。 targetLang: ${targetLang}`
        );
        const responseFromContentScript = await chrome.tabs.sendMessage(
          tab.id,
          {
            action: "getSelectionAndTranslate", // content.js がこのアクションをリッスンする
            targetLang: targetLang,
          }
        );
        detailedLog(
          "コンテンツスクリプトからの応答 (コマンド経由):",
          responseFromContentScript
        );
        // コンテンツスクリプトからの応答に基づいて何か処理をする場合はここ
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
          // 必要であれば chrome.notifications API などでユーザーに通知
          // chrome.notifications.create({
          //   type: 'basic',
          //   iconUrl: 'icons/icon48.png',
          //   title: '翻訳エラー',
          //   message: '現在のページでは翻訳を実行できませんでした。ページをリロードしてお試しください。'
          // });
        }
      }
    } else {
      console.error("アクティブなタブ情報が取得できませんでした（コマンド）。");
    }
  }
});

// --- 翻訳リクエスト処理関数 ---
async function handleTranslateRequest(request, sender, sendResponse) {
  detailedLog("handleTranslateRequest 開始。リクエスト:", request);
  try {
    detailedLog("ローカルストレージから設定を読み込み開始...");
    const items = await chrome.storage.local.get([
      "geminiApiKey",
      "defaultTargetLanguage",
    ]);
    detailedLog(
      "読み込んだ設定オブジェクト (items):",
      JSON.stringify(items, null, 2)
    );

    const apiKey = items.geminiApiKey;
    detailedLog("--- APIキーチェック開始 ---");
    detailedLog("typeof apiKey:", typeof apiKey);
    detailedLog("apiKey の値:", apiKey); // ★ここが最も重要！
    detailedLog("apiKey === undefined:", apiKey === undefined);
    detailedLog("apiKey === null:", apiKey === null);
    detailedLog("apiKey === '':", apiKey === "");
    detailedLog("!apiKey の評価結果:", !apiKey);
    detailedLog("--- APIキーチェック終了 ---");

    const textToTranslate = request.text;
    // リクエストに targetLang があればそれを使用、なければデフォルト言語を使用
    const targetLanguage =
      request.targetLang || items.defaultTargetLanguage || "ja";
    detailedLog(
      "翻訳対象テキスト:",
      textToTranslate,
      "翻訳先言語:",
      targetLanguage
    );

    if (!apiKey) {
      const errorMsg =
        "APIキーが設定されていません。オプションページで設定してください。";
      console.error("バックグラウンド: " + errorMsg);
      sendResponse({ error: errorMsg });
      return;
    }

    detailedLog("APIキー確認OK、Gemini API呼び出し準備");
    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = "gemini-1.5-flash-latest"; // または "gemini-pro" など、利用したいモデル
    const model = genAI.getGenerativeModel({
      model: modelName,
      safetySettings: [
        // 必要に応じて調整
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
      generationConfig: {
        // 必要に応じて設定
        // temperature: 0.7,
        // maxOutputTokens: 2048,
      },
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
      const errorMsg = `翻訳リクエストがブロックされたか、レスポンスがありませんでした。理由: ${blockReason}, SafetyRatings: ${safetyRatingsInfo}`;
      console.error("バックグラウンド: " + errorMsg, result);
      sendResponse({ error: errorMsg });
      return;
    }

    const translatedText = generationResponse.text();
    detailedLog("翻訳成功 (SDK):", translatedText);
    sendResponse({ translatedText: translatedText.trim() });
  } catch (error) {
    console.error("バックグラウンド: 翻訳処理中の包括的なエラー:", error);
    let errorMessage = "翻訳処理中に予期せぬエラーが発生しました。";
    if (error.message) {
      errorMessage += ` ${error.message}`;
    }
    // GoogleGenerativeAIError の場合、より詳細な情報が含まれることがある
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
      errorMessage = `Gemini APIエラー: ${error.message}`;
    }
    sendResponse({ error: errorMessage });
  }
}

// 拡張機能インストール時やアップデート時に、オプションページで初期設定を促す (任意)
chrome.runtime.onInstalled.addListener(async (details) => {
  detailedLog("onInstalled イベント:", details);
  if (details.reason === "install") {
    // 初回インストール時にオプションページを開く
    // chrome.runtime.openOptionsPage();

    // または、デフォルト設定を書き込む
    const items = await chrome.storage.local.get([
      "defaultTargetLanguage",
      "targetLanguagePopup",
    ]);
    if (!items.defaultTargetLanguage) {
      detailedLog("デフォルトの翻訳先言語を 'ja' に設定します。");
      chrome.storage.local.set({ defaultTargetLanguage: "ja" });
    }
    if (!items.targetLanguagePopup) {
      detailedLog("ポップアップの翻訳先言語を 'ja' に設定します。");
      chrome.storage.local.set({ targetLanguagePopup: "ja" });
    }
  }
  // アップデート時の処理などもここに追加可能
});
