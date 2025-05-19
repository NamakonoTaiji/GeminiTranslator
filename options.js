// options.js
document.addEventListener("DOMContentLoaded", function () {
  const apiKeyInput = document.getElementById("apiKey");
  const defaultTargetLangSelect = document.getElementById("defaultTargetLang");
  const saveButton = document.getElementById("saveOptionsButton");
  const statusDiv = document.getElementById("status");

  // 保存されている設定値を読み込んでフォームに表示
  function restoreOptions() {
    chrome.storage.sync.get(
      {
        geminiApiKey: "", // デフォルト値
        defaultTargetLanguage: "ja", // デフォルト値
      },
      function (items) {
        apiKeyInput.value = items.geminiApiKey;
        defaultTargetLangSelect.value = items.defaultTargetLanguage;
      }
    );
  }

  // 設定を保存
  function saveOptions() {
    const apiKey = apiKeyInput.value;
    const defaultTargetLang = defaultTargetLangSelect.value;

    chrome.storage.sync.set(
      {
        geminiApiKey: apiKey,
        defaultTargetLanguage: defaultTargetLang,
      },
      function () {
        // 保存完了をユーザーに通知
        statusDiv.textContent = "オプションを保存しました。";
        setTimeout(function () {
          statusDiv.textContent = "";
        }, 1500);
      }
    );
  }

  restoreOptions();
  saveButton.addEventListener("click", saveOptions);
});
