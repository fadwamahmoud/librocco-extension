fetch(
  "https://www.libreriauniversitaria.it/madre-ossa-tuti-ilaria-longanesi/libro/9788830448766"
  // {
  //   mode: "no-cors",
  // }
)
  // .then((response) => response.text())
  .then((data) => console.log(data.body))
  .catch((error) => console.error(error));
