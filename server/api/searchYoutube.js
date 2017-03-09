function getYoutubeContent(game) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${game}&type=video&videoCaption=closedCaption&key=${YOUTUBE_API_KEY}`)
    .then((response) => response.json())
    .catch((error) => console.log('getYoutubeContent Error: ', error));
};