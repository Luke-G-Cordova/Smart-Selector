chrome.runtime.onMessage.addListener((msg) => {
  if (msg.from === 'background' && msg.subject === 'toggle_popup') {
    1;
  }
});
