chrome.runtime.sendMessage(
  { data: "Message from content script" },
  (response) => {
    // response;
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(JSON.parse(response.html), "text/html");
    const book = findSiblingDiv(htmlDoc)
    console.log("Response from background script:", book);
  }
);


type NodeWithNextSibling = Node & {
  nextSibling: NodeWithNextSibling | null;
}

function findSiblingDiv(rawHTML: Document): HTMLDivElement | null {

  let pElement = Array.from(rawHTML.querySelectorAll("p")).find(
    (p) => {

      return p.textContent && p.textContent.trim() === "This is the raw JSON used to render this page."
    }
  );

  let siblingDiv: HTMLDivElement | null = null;

  let json: any
  if (pElement) {
    let sibling = pElement.nextSibling;
    let innerDivHtml: string

    while (sibling) {
      if (sibling.nodeName.toLowerCase() === "div") {
        siblingDiv = sibling as HTMLDivElement;
        innerDivHtml = siblingDiv.innerHTML
        let decodedString = decodeURIComponent(encodeURIComponent(innerDivHtml));
        decodedString = decodedString.replace(/<br>/g, '')
          .replace(/&nbsp;/g, '');

        try {
          json = JSON.parse(decodedString);
          console.log("result:", json);
        } catch (error) {
          console.error("Parsing error:", error);
        }
        break;
      }
      sibling = sibling.nextSibling;
    }
  }

  if (siblingDiv === null) {
    console.log("No sibling div found!");
  } else {
    console.log("Sibling div found", siblingDiv);
  }

  return json;
}