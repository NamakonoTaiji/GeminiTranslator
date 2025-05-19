// background.js (ES Moduleとして記述)

// CDNから @google/generative-ai ライブラリをインポート
// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "https://esm.run/@google/generative-ai"; // esm.run はCDNの一例

// import { GoogleGenerativeAI, ... } from "https://esm.run/@google/generative-ai"; // ← この行を削除またはコメントアウト
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"; // ← こちらに変更

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "translate") {
    // 非同期処理を即時実行の async 関数でラップ
    (async () => {
      try {
        const items = await chrome.storage.local.get([
          "geminiApiKey",
          "defaultTargetLanguage",
        ]);
        const apiKey = items.geminiApiKey;
        const textToTranslate = request.text;
        const targetLanguage =
          request.targetLang || items.defaultTargetLanguage || "ja"; // デフォルトは日本語

        if (!apiKey) {
          const errorMsg =
            "APIキーが設定されていません。オプションページで設定してください。";
          console.error(errorMsg);
          sendResponse({ error: errorMsg });
          return;
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // モデルを指定
        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          // セーフティセッティング (必要に応じて調整)
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
          // generationConfig: { // 必要に応じて設定
          //   temperature: 0.7,
          //   maxOutputTokens: 2048,
          // }
        });

        // 翻訳プロンプト (ユーザーの指示にある systemInstruction のような役割もプロンプトに含める)
        // ここでは、シンプルに翻訳タスクを指示します。
        const prompt = `あなたはプロの翻訳家です。以下の「テキスト」を自然な「${targetLanguage}」に翻訳してください。翻訳結果のテキストのみを返してください。\n\nテキスト：\n${textToTranslate}`;

        console.log("Sending prompt to Gemini via SDK:", prompt);

        const result = await model.generateContent(prompt);
        const generationResponse = result.response; // result.response は Promise ではない

        if (!generationResponse) {
          // レスポンスが取得できなかった場合 (セーフティフィルターでブロックされた場合など)
          console.error(
            "Failed to get a response. Potentially blocked by safety filters.",
            result
          );
          let blockReason = "不明な理由";
          if (
            result.response &&
            result.response.promptFeedback &&
            result.response.promptFeedback.blockReason
          ) {
            blockReason = result.response.promptFeedback.blockReason;
          }
          sendResponse({
            error: `翻訳リクエストがブロックされた可能性があります。理由: ${blockReason}`,
          });
          return;
        }

        const translatedText = generationResponse.text();

        console.log("翻訳成功 (SDK):", translatedText);
        sendResponse({ translatedText: translatedText.trim() });
      } catch (error) {
        console.error("翻訳処理中のエラー (SDK):", error);
        let errorMessage = "翻訳処理中にエラーが発生しました (SDK)。";
        if (error.message) {
          errorMessage += ` ${error.message}`;
        }
        // GoogleGenerativeAIError の場合、より詳細な情報が含まれることがある
        if (
          error.name === "GoogleGenerativeAIResponseError" ||
          error.toString().includes("[GoogleGenerativeAI Error]")
        ) {
          console.error(
            "GoogleGenerativeAI Error details:",
            error.message,
            error.stack,
            error
          );
          errorMessage = `Gemini APIエラー: ${error.message}`; // より具体的なエラーメッセージを優先
        }
        sendResponse({ error: errorMessage });
      }
    })(); // 即時実行

    return true; // 非同期処理のためtrueを返す
  }
  // 他のメッセージリスナー...
});
