let lastRightClickedElement = null;

document.addEventListener('contextmenu', (event) => {
  lastRightClickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideElement" && lastRightClickedElement) {
    lastRightClickedElement.style.display = 'none';
    lastRightClickedElement = null;
  }
});

let hiddenElements = [];

document.addEventListener('contextmenu', (event) => {
  lastRightClickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideElement" && lastRightClickedElement) {
    lastRightClickedElement.style.display = 'none';
    hiddenElements.push(lastRightClickedElement);
    lastRightClickedElement = null;
  } else if (request.action === "resetHiddenElements") {
    hiddenElements.forEach(element => {
      element.style.display = '';
    });
    hiddenElements = [];
  }
});