chrome.runtime.sendMessage(
  { data: "Message from content script" },
  (response) => {
    console.log("Response from background script:", response);
  }
);
