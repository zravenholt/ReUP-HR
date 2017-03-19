import axios from 'axios';
import React from 'react';

const dbQuery = function (tile, query) {
  var game = query.toLowerCase(); // ignores case sensitivity
  axios.get('/games/get', { params: { gameName: game } })
  .then((response) => {
    console.log('GOT GameList BACK FROM dbQuery:', response.data);
    tile.setState({ myGames: response.data });
    console.log('myGames state is now set to:', tile.state.myGames);
  }).catch((err) => {
    console.log('Error fetching games from database via dbQuery:', err);
  });
}

export default dbQuery;