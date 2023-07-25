import { annasArchiveScraper, libreriauniversitariaScraper, openLibraryScraper, biblioScraper } from "./helpers/helpers"

window.addEventListener('message', (event) => {

  if (event.source !== window) return

  // message will be sent from client as such: window.postMessage({ type: 'FROM_PAGE', isbn: 124321532 }, '*');
  if (event.data.type && event.data.type === 'FROM_PAGE' && event.data.isbn) {
    chrome.runtime.sendMessage(
      { data: event.data.isbn },
      // (response) => {
      //   console.log(response)

      // }
    );


  }
})

chrome.runtime.onMessage.addListener(
  (message: any, sender: chrome.runtime.MessageSender, senderResponse: (response?: any) => void) => {

    const parser = new DOMParser();
    const parsedResponse: { url: string, body: string } = JSON.parse(message)
    // checking for the url could also be replaced with checking for the response message
    const annasArchive = parsedResponse.url.includes("annas")
    const libreriauniversitaria = parsedResponse.url.includes("libreriauniversitaria")
    const openLibrary = parsedResponse.url.includes("openlibrary")
    // const libGen = parsedResponse.url.includes("libgen")
    const biblio = parsedResponse.url.includes("biblio")
    if (annasArchive) {

      const htmlDoc = parser.parseFromString(parsedResponse.body, "text/html");
      const book = annasArchiveScraper(htmlDoc)
      console.log("Response from annas archive:", book);
    }
    if (libreriauniversitaria) {
      const htmlDoc = parser.parseFromString(parsedResponse.body, "text/html");
      const book = libreriauniversitariaScraper(htmlDoc)
      console.log("Response from libreriauniversitaria:", book);
    }
    if (openLibrary) {
      const htmlDoc = parser.parseFromString(parsedResponse.body, "text/html");
      const book = openLibraryScraper(htmlDoc)
      console.log("Response from openLibrary:", book);
    }
    if (biblio) {
      const htmlDoc = parser.parseFromString(parsedResponse.body, "text/html");
      const book = biblioScraper(htmlDoc)
      console.log("Response from biblio:", book);
    }
  }
)