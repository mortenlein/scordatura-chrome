const DEFAULT_ACTION = "scrape";

const actionPathInput = document.getElementById("actionPath");
const saveBtn = document.getElementById("saveBtn");
const statusEl = document.getElementById("status");

function setStatus(text) {
  statusEl.textContent = text;
  if (text) {
    setTimeout(() => {
      statusEl.textContent = "";
    }, 1500);
  }
}

function load() {
  chrome.storage.sync.get({ actionPath: DEFAULT_ACTION }, (items) => {
    actionPathInput.value = items.actionPath || DEFAULT_ACTION;
  });
}

function save() {
  const actionPath = (actionPathInput.value || DEFAULT_ACTION).trim();
  chrome.storage.sync.set({ actionPath }, () => {
    setStatus("Saved");
  });
}

saveBtn.addEventListener("click", save);
load();