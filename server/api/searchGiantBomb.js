function searchGiantBomb (query) {
  return fetch(`http://www.giantbomb.com/api/search?api_key=${GIANT_BOMB_API_KEY}&format=json&query="${query}"&resources=game`)
    .then((response) => response.json())
    .then((responseJSON) => console.log(responseJSON))
    .catch((error) => {
      console.error(error);
    });
}

window.searchGiantBomb = searchGiantBomb;