document.addEventListener("DOMContentLoaded", function () {
  const translateButton = document.getElementById("translateManuallyButton");
  const optionsLink = document.getElementById("openOptionsPage");
  const targetLangSelect = document.getElementById("targetLangPopup");
  const langStatusDiv = document.getElementById("langStatus");

  // 1. 保存されている翻訳先言語を読み込み、セレクトボックスに設定
  chrome.storage.sync.get(["targetLanguagePopup"], function (result) {
    if (result.targetLanguagePopup) {
      targetLangSelect.value = result.targetLanguagePopup;
    } else {
      // デフォルト値が設定されていない場合、最初のオプション（日本語）を設定
      targetLangSelect.value = "ja";
      chrome.storage.sync.set({ targetLanguagePopup: "ja" }); // デフォルトを保存
    }
  });

  // 2. 「選択範囲を翻訳」ボタンのクリックイベント
  if (translateButton) {
    translateButton.addEventListener("click", function () {
      const selectedTargetLang = targetLangSelect.value;

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0] && tabs[0].id) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              action: "getSelectionAndTranslate",
              targetLang: selectedTargetLang,
            },
            function (response) {
              if (chrome.runtime.lastError) {
                console.error(
                  "ポップアップからの送信エラー:",
                  chrome.runtime.lastError.message
                );
                // ここでユーザーにエラーを通知することも検討 (例: ポップアップ内にメッセージ表示)
                langStatusDiv.textContent =
                  "エラー: " +
                  chrome.runtime.lastError.message.substring(0, 30) +
                  "...";
                langStatusDiv.style.color = "red";
                setTimeout(() => {
                  langStatusDiv.textContent = "";
                }, 3000);
                return;
              }
              // コンテンツスクリプトからの応答を処理 (任意)
              if (response) {
                if (response.status === "ok") {
                  console.log("コンテンツスクリプトでの翻訳処理開始");
                  // window.close(); // 翻訳開始したらポップアップを閉じる場合
                } else if (response.status === "no_selection") {
                  langStatusDiv.textContent = "テキストが選択されていません。";
                  langStatusDiv.style.color = "orange";
                  setTimeout(() => {
                    langStatusDiv.textContent = "";
                  }, 3000);
                }
              }
            }
          );
        } else {
          console.error("アクティブなタブが見つかりません。");
          langStatusDiv.textContent = "アクティブなタブが見つかりません。";
          langStatusDiv.style.color = "red";
          setTimeout(() => {
            langStatusDiv.textContent = "";
          }, 3000);
        }
      });
    });
  }

  // 3. 「オプションを開く」リンクのクリックイベント
  if (optionsLink) {
    optionsLink.addEventListener("click", function (event) {
      event.preventDefault(); // デフォルトのリンク動作をキャンセル
      chrome.runtime.openOptionsPage();
    });
  }

  // 4. 翻訳先言語セレクトボックスの変更イベント
  if (targetLangSelect) {
    targetLangSelect.addEventListener("change", function () {
      const newLang = this.value;
      chrome.storage.sync.set({ targetLanguagePopup: newLang }, function () {
        if (chrome.runtime.lastError) {
          console.error(
            "言語設定の保存エラー:",
            chrome.runtime.lastError.message
          );
          langStatusDiv.textContent = "言語設定の保存に失敗しました。";
          langStatusDiv.style.color = "red";
        } else {
          console.log("翻訳先の言語を " + newLang + " に設定しました。");
          langStatusDiv.textContent = "言語設定を保存しました。";
          langStatusDiv.style.color = "green";
        }
        setTimeout(() => {
          langStatusDiv.textContent = "";
        }, 2000);
      });
    });
  }
});
