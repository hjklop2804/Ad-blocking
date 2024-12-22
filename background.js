// 定义常量
const MENU_ITEM_ID = "hideElement";
const ACTION_HIDE_ELEMENT = "hideElement";

// 当扩展安装时，上下文菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: "Hide this element",
    contexts: ["all"]
  });
});

// 当上下文菜单被点击时，发送消息给标签页
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === MENU_ITEM_ID) {
    chrome.tabs.sendMessage(tab.id, { action: ACTION_HIDE_ELEMENT });
  }
});chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "hideElement",
    title: "Hide this element",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "hideElement") {
    chrome.tabs.sendMessage(tab.id, { action: "hideElement" });
  }
});
