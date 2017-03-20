import axios from 'axios';
import React from 'react';

const dbQuery = function (context) {
  // var game = query.toLowerCase();
  axios.get('/games/get')
  .then((response) => {
    console.log('GOT GameList BACK FROM dbQuery:', response.data);
    context.setState({ myGames: response.data });
    console.log('myGames state is now set to:', context.state.myGames);
  }).catch((err) => {
    console.log('Error fetching games from database via dbQuery:', err);
  });
}

export default dbQuery;