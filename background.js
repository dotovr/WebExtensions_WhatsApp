function openMyPage() {
  console.log("injecting");
  chrome.tabs.create({
    "url": chrome.extension.getURL("https://web.whatsapp.com")
  });
}

chrome.browserAction.onClicked.addListener(openMyPage);
