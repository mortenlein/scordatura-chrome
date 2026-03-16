const DEFAULT_ACTION = "scrape";
const CLOSE_DELAY_MS = 1500;

chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.url) return;

  chrome.storage.sync.get({ actionPath: DEFAULT_ACTION }, (items) => {
    const actionPath = (items.actionPath || DEFAULT_ACTION).trim();
    const target =
      "scordatura://" +
      encodeURIComponent(actionPath) +
      "?url=" +
      encodeURIComponent(tab.url);

    const sentUrl =
      chrome.runtime.getURL("sent.html") +
      "?target=" +
      encodeURIComponent(target);

    chrome.tabs.create({ url: sentUrl, active: false });
  });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (!message || message.type !== "send" || !message.target) return;

  chrome.tabs.create({ url: message.target, active: false }, (createdTab) => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: chrome.runtime.getURL("icon-128.png"),
      title: "Sent to Scordatura",
      message: "The current tab was sent to Scordatura."
    });

    if (createdTab && createdTab.id) {
      setTimeout(() => {
        chrome.tabs.remove(createdTab.id, () => {
          void chrome.runtime.lastError;
        });
      }, CLOSE_DELAY_MS);
    }

    if (sender && sender.tab && sender.tab.id) {
      setTimeout(() => {
        chrome.tabs.remove(sender.tab.id, () => {
          void chrome.runtime.lastError;
        });
      }, CLOSE_DELAY_MS);
    }
  });
});