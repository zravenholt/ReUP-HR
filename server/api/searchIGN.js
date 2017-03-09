function searchIGN (/*{key, query, max}, callback*/) {
  return fetch(`https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=${IGN_API_KEY}`)
    .then(function(response) => response.json())
    .then(function(responseJSON) => console.log(responseJSON))
    .catch((error) => {
      console.error(error);
    });
}