// REQUIRES OAUTH 1.0
function searchTwitter (username) {
  return fetch(`https://api.twitter.com/1.1/search/tweets.json?q=%40${username}`)
    .then((response) => response.json())
    .then((responseJSON) => console.log(responseJSON))
    .catch((error) => {
      console.error(error);
    });
}

window.searchTwitter = searchTwitter;