import { togglePopup } from './ui/DevToolPopup';

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.from === 'background' && msg.subject === 'toggle_popup') {
    togglePopup();
  }
});
