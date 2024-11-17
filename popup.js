document.getElementById('resetButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "resetHiddenElements"}, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Message sending failed: ", chrome.runtime.lastError.message);
        } else if (response && response.error) {
          console.error("Error response from content script: ", response.error);
        }
      });
    } else {
      console.error("No active tabs found.");
    }
  });
});document.getElementById('resetButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "resetHiddenElements"});
  });
});