import axios from 'axios';
import React from 'react';

const fetchGiantBomb = function (tile, gameName) {
  axios.get('/giantbomb/get', { params: { gameName: gameName } })
  .then((response) => {
    tile.setState({ gameInfo: response.data.results[0] });
    tile.setState({ gameImages: response.data.results[0].image });
  }).catch((err) => {
    console.log(`Error fetching Giant Bomb data: ${err}`);
  });
}

export default fetchGiantBomb;