chrome.runtime.onMessage.addListener(function (
  message,
  sender,
  senderResponse
) {
  fetch(
    "https://www.libreriauniversitaria.it/madre-ossa-tuti-ilaria-longanesi/libro/9788830448766"
  )
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      senderResponse({ html: res });
    });

  return true;
});
