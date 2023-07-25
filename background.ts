chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {
    // const isbn = 9783551551672;
    const isbn = 9781338878929;
    // const isbn = 9780060512804;
    const urls = [
      `https://www.libreriauniversitaria.it/ricerca/query/${isbn}`,
      `https://annas-archive.org/isbn/${isbn}`,
      `https://openlibrary.org/search?q=${isbn}&mode=everything`,
      // `https://libgen.is/search.php?req=${isbn}`,
      //  `https://www.biblio.com/${isbn}`
    ]

    Promise.all(urls.map((url) => fetch(url)
      .then((res) =>
        res.text().then((text) => ({ url: url, body: text }))
      )))

      .then((res) => {
        // handle serialization here because otherwise 
        // the html gets messed up in the sending process
        senderResponse(JSON.stringify(res));
      })

    return true;
  }
);