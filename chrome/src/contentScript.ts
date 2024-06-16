import { togglePopup } from './ui/DevToolPopup';

// DELETE ME
togglePopup();

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.from === 'background' && msg.subject === 'toggle_popup') {
    togglePopup();
  }
});
