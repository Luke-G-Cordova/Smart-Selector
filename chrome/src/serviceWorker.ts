import { initializeStorageWithDefaults } from './storage';

chrome.runtime.onInstalled.addListener(async () => {
  // Here goes everything you want to execute after extension initialization

  await initializeStorageWithDefaults({});

  console.log('Extension successfully installed!');
});

// Log storage changes, might be safely removed
chrome.storage.onChanged.addListener((changes) => {
  for (const [key, value] of Object.entries(changes)) {
    console.log(
      `"${key}" changed from "${value.oldValue}" to "${value.newValue}"`,
    );
  }
});

/**
 * sends data to different parts of the extension
 * @param data object to be sent
 */
const sendData = (data: communicationInfo) => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      if (tabs[0].id != null) {
        chrome.tabs.sendMessage(tabs[0].id, data);
      } else {
        console.error('tabId is undefined');
      }
    },
  );
};

/**
 * these send the open_popup event to the content scripts
 */
chrome.commands.onCommand.addListener(async (command) => {
  if (
    command === 'toggle_popup' ||
    command === 'close_popup' ||
    command === 'open_popup'
  ) {
    const sendObj: communicationInfo = {
      from: 'background',
      subject: command,
    };
    sendData(sendObj);
  }
});

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  console.log(request);
  if (request.popupMounted) {
    console.log('eventPage notified that popup.tsx has mounted');
  }
  if (request.toggle_popup) {
    const sendObj: communicationInfo = {
      from: 'background',
      subject: 'toggle_popup',
    };
    sendData(sendObj);
  }
});
