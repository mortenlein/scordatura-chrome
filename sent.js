const params = new URLSearchParams(location.search);
const target = params.get("target");

if (target) {
  chrome.runtime.sendMessage({ type: "send", target });
}