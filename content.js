// content.js

let translationBox = null; // 翻訳結果を表示するDIV要素を保持するグローバル変数
let lastSelectedText = ""; // 最後に選択したテキストを保持

// 翻訳結果を表示する関数
function showTranslation(originalText, translatedText, eventPageX, eventPageY) {
  // 既に翻訳ボックスがあれば削除 (連続して翻訳する場合など)
  if (translationBox) {
    translationBox.remove();
    translationBox = null;
  }

  // 翻訳ボックス（DIV要素）を作成
  translationBox = document.createElement("div");
  translationBox.id = "gemini-translator-inline-box"; // CSSでスタイル指定するためのID

  // 翻訳ボックスの基本的なスタイル
  Object.assign(translationBox.style, {
    position: "absolute",
    zIndex: "2147483647", // できるだけ前面に表示
    background: "#ffffff",
    border: "1px solid #dadce0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
    padding: "12px 16px",
    maxWidth: "400px",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#202124",
    fontFamily: "sans-serif", // ページフォントの影響を避けるために指定
    overflowWrap: "break-word",
    cursor: "default", // ボックス上ではテキスト選択カーソルにならないように
  });

  // 閉じるボタンを作成
  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  Object.assign(closeButton.style, {
    position: "absolute",
    top: "4px",
    right: "4px",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    color: "#70757a",
    cursor: "pointer",
    padding: "4px",
    lineHeight: "1",
  });
  closeButton.onclick = function (event) {
    event.stopPropagation(); // 親要素へのクリックイベント伝播を防ぐ
    if (translationBox) {
      translationBox.remove();
      translationBox = null;
    }
  };
  translationBox.appendChild(closeButton);

  // 翻訳結果表示エリア
  const contentDiv = document.createElement("div");
  contentDiv.style.paddingRight = "20px"; // 閉じるボタンと被らないように
  contentDiv.textContent = translatedText;
  translationBox.appendChild(contentDiv);

  // 表示位置の計算と設定
  let top, left;
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    top = window.scrollY + rect.bottom + 8; // 選択範囲の下、少し離して表示
    left = window.scrollX + rect.left;

    // 画面端からはみ出ないように調整
    if (left + translationBox.offsetWidth > window.innerWidth) {
      left = window.innerWidth - translationBox.offsetWidth - 10; // 画面右端に合わせる
    }
    if (left < 0) {
      left = 10; // 画面左端に合わせる
    }
  } else if (eventPageX !== undefined && eventPageY !== undefined) {
    // mouseupイベントの座標をフォールバックとして使用 (mouseup時のみ)
    top = window.scrollY + eventPageY + 15;
    left = window.scrollX + eventPageX;
  } else {
    // どうしても位置が取れない場合は画面中央上部など (稀なケース)
    top = window.scrollY + 20;
    left = window.scrollX + document.documentElement.clientWidth / 2 - 150;
  }
  translationBox.style.top = `${top}px`;
  translationBox.style.left = `${left}px`;

  document.body.appendChild(translationBox);

  // 翻訳ボックスの外側をクリックしたら閉じる
  function handleClickOutside(event) {
    if (translationBox && !translationBox.contains(event.target)) {
      translationBox.remove();
      translationBox = null;
      document.removeEventListener("mousedown", handleClickOutside); // mousedownで判定開始
    }
  }
  // 次のmousedownから判定開始 (現在のmouseupイベントの直後に発火するクリックを避けるため)
  setTimeout(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, 0);
}

// バックグラウンドからの翻訳レスポンスを処理する共通関数
function handleTranslationResponse(
  response,
  originalText,
  eventPageX,
  eventPageY
) {
  if (chrome.runtime.lastError) {
    console.error(
      "コンテンツスクリプトでの翻訳応答エラー:",
      chrome.runtime.lastError.message
    );
    // 必要ならユーザーにエラー通知UIを表示
    return;
  }
  if (response && response.translatedText) {
    console.log("翻訳結果受信:", response.translatedText);
    showTranslation(
      originalText,
      response.translatedText,
      eventPageX,
      eventPageY
    );
  } else if (response && response.error) {
    console.error("翻訳APIエラー:", response.error);
    // 必要ならユーザーにエラー通知UIを表示 (例: APIキーエラーなど)
    showTranslation(
      originalText,
      `翻訳エラー: ${response.error}`,
      eventPageX,
      eventPageY
    );
  }
}

// // 1. マウス操作でテキスト選択が完了した時に自動で取得・送信
// document.addEventListener("mouseup", function (event) {
//   // 翻訳ボックス自体の上や、入力要素の上でのmouseupは無視
//   if (
//     event.target.closest("#gemini-translator-inline-box") ||
//     event.target.matches('input, textarea, [contenteditable="true"]')
//   ) {
//     return;
//   }

//   const selectedText = window.getSelection().toString().trim();

//   if (selectedText.length > 0 && selectedText !== lastSelectedText) {
//     lastSelectedText = selectedText; // 同じテキストで連続翻訳しないように
//     console.log("テキスト選択 (mouseup):", selectedText);

//     // バックグラウンドスクリプトに翻訳を依頼 (デフォルトの翻訳先言語はバックグラウンドで取得)
//     chrome.runtime.sendMessage(
//       {
//         action: "translate", // バックグラウンドの 'translate' アクションを呼び出す
//         text: selectedText,
//         // targetLang はバックグラウンドでオプション設定から取得させるか、ここで固定値を渡す
//       },
//       function (response) {
//         handleTranslationResponse(
//           response,
//           selectedText,
//           event.pageX,
//           event.pageY
//         );
//       }
//     );
//   } else if (selectedText.length === 0) {
//     lastSelectedText = ""; // 選択が解除されたらリセット
//   }
// });

// 2. ポップアップやショートカットキーからの指示で取得・送信
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getSelectionAndTranslate") {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
      lastSelectedText = selectedText; // 選択テキストを更新
      console.log(
        "指示によるテキスト選択:",
        selectedText,
        "翻訳先:",
        request.targetLang
      );
      chrome.runtime.sendMessage(
        {
          action: "translate",
          text: selectedText,
          targetLang: request.targetLang, // ポップアップやショートカットから指定された言語
        },
        function (response) {
          // 翻訳結果を現在のマウス位置ではなく、選択範囲に基づいて表示するため、
          // mouseupイベントの座標は渡さない (showTranslation内でselectionから位置計算する)
          handleTranslationResponse(response, selectedText);
        }
      );
      sendResponse({ status: "ok", selectedText: selectedText });
    } else {
      console.log("指示あり、しかしテキスト選択なし");
      sendResponse({ status: "no_selection" });
    }
    return true; // 非同期応答のため true を返す
  }
});

console.log("Gemini 翻訳 Content Script loaded.");
