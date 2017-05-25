import axios from 'axios';
import React from 'react';

const dbQuery = function (cb) {
  // var game = query.toLowerCase();
  axios.get('/games/get')
  .then((response) => {
    console.log('GOT GameList BACK FROM dbQuery:', response.data);
    cb(response.data);
    return response.data;
  }).catch((err) => {
    console.log('Error fetching games from database via dbQuery:', err);
  });
};

export default dbQuery;