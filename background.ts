chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {
    const isbn = 9781338878929;

    fetch(`https://annas-archive.org/isbn/${isbn}`)
      .then((res) => res.text())

      .then((res) => {
        // handle serialization here because otherwise 
        // the html gets messed up in the sending process
        senderResponse({ html: JSON.stringify(res) });
      });

    return true;
  }
);