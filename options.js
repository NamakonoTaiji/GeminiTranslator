// options.js
document.addEventListener("DOMContentLoaded", function () {
  const apiKeyInput = document.getElementById("apiKey");
  const defaultTargetLangSelect = document.getElementById("defaultTargetLang");
  const selectedApiModelSelect = document.getElementById("selectedApiModel"); // ★追加
  const saveButton = document.getElementById("saveOptionsButton");
  const statusDiv = document.getElementById("status");

  function restoreOptions() {
    chrome.storage.local.get(
      {
        geminiApiKey: "",
        defaultTargetLanguage: "ja",
        selectedApiModel: "gemini-2.0-flash", // ★ユーザー様の現在の利用モデルに合わせるなど
      },
      function (items) {
        if (chrome.runtime.lastError) {
          console.error(
            "オプション読み込みエラー:",
            chrome.runtime.lastError.message
          );
          return;
        }
        apiKeyInput.value = items.geminiApiKey;
        defaultTargetLangSelect.value = items.defaultTargetLanguage;
        selectedApiModelSelect.value = items.selectedApiModel; // ★読み込んだモデルを設定
      }
    );
  }

  function saveOptions() {
    const apiKey = apiKeyInput.value;
    const defaultTargetLang = defaultTargetLangSelect.value;
    const selectedModel = selectedApiModelSelect.value; // ★選択されたモデルを取得

    chrome.storage.local.set(
      {
        geminiApiKey: apiKey,
        defaultTargetLanguage: defaultTargetLang,
        selectedApiModel: selectedModel, // ★モデルを保存
      },
      function () {
        if (chrome.runtime.lastError) {
          console.error(
            "オプション保存エラー:",
            chrome.runtime.lastError.message
          );
          statusDiv.textContent = "オプションの保存に失敗しました。";
          statusDiv.style.color = "red";
        } else {
          statusDiv.textContent = "オプションを保存しました。";
          statusDiv.style.color = "green";
        }
        setTimeout(function () {
          statusDiv.textContent = "";
        }, 2000);
      }
    );
  }

  restoreOptions();
  saveButton.addEventListener("click", saveOptions);
});
