import { annasArchiveScraper, libreriauniversitariaScraper, openLibraryScraper, libGenScraper } from "./helpers/helpers"
chrome.runtime.sendMessage(
  { data: "Message from content script" },
  (response) => {
    // response;
    const parser = new DOMParser();
    const responses: { url: string, body: string }[] = JSON.parse(response)
    const annasArchive = responses.find((r) => r.url.includes("annas"))
    const libreriauniversitaria = responses.find((r) => r.url.includes("libreriauniversitaria"))
    const openLibrary = responses.find((r) => r.url.includes("openlibrary"))
    const libGen = responses.find((r) => r.url.includes("libgen"))
    if (annasArchive) {

      const htmlDoc = parser.parseFromString(annasArchive.body, "text/html");
      // console.log(JSON.parse(response))
      const book = annasArchiveScraper(htmlDoc)
      console.log("Response from annas archive:", book);
    }
    if (libreriauniversitaria) {
      const htmlDoc = parser.parseFromString(libreriauniversitaria.body, "text/html");
      // console.log(JSON.parse(response))
      const book = libreriauniversitariaScraper(htmlDoc)
      console.log("Response from libreriauniversitaria:", book);
    }
    if (openLibrary) {
      const htmlDoc = parser.parseFromString(openLibrary.body, "text/html");
      // console.log(JSON.parse(response))
      const book = openLibraryScraper(htmlDoc)
      console.log("Response from openLibrary:", book);
    }
    if (libGen) {
      const htmlDoc = parser.parseFromString(libGen.body, "text/html");
      // console.log(JSON.parse(response))
      const book = libGenScraper(htmlDoc)
      console.log("Response from libGen:", book);
    }
  }
);
