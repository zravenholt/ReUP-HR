function searchIGN () {
  return fetch(`https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=${IGN_API_KEY}`)
    .then((response) => response.json())
    .then((responseJSON) => console.log(responseJSON))
    .catch((error) => {
      console.error(error);
    });
}

window.searchIGN = searchIGN;