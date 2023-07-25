import { fetchUrl } from "./helpers/helpers"
chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {
    // const isbn = 9783551551672;
    // const isbn = 9780060512804;
    const isbn = message.data || 9781338878929;
    const url =
      `https://www.libreriauniversitaria.it/ricerca/query/${isbn}`

    fetchUrl(url, senderResponse);


    return true;
  }
);
chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {
    // const isbn = 9783551551672;
    const isbn = message.data || 9781338878929;
    // const isbn = 9780060512804;
    const url =
      `https://annas-archive.org/isbn/${isbn}`

    fetchUrl(url, senderResponse);



    return true;
  }
);

chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {
    // const isbn = 9783551551672;
    const isbn = message.data || 9781338878929;
    // const isbn = 9780060512804;
    const url = `https://openlibrary.org/search?q=${isbn}&mode=everything`

    fetchUrl(url, senderResponse);


    return true;
  }
);

chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {
    // const isbn = 9783551551672;
    const isbn = message.data || 9781338878929;
    // const isbn = 9780060512804;
    const url = `https://www.biblio.com/${isbn}`

    fetchUrl(url, senderResponse);


    return true;
  }
);
