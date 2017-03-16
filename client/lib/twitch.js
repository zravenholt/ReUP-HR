import axios from 'axios';
import React from 'react';
import keys from '../../config/keys.js';

var game = 'overwatch'

const url = `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=5`;

const options = {
  headers: {
    'Client-ID': keys.TWITCH_CLIENT_ID
  }
};

const fetchTwitch = function(tile) {
  axios.get(url, options)
    .then((response) => {
      tile.setState({
        streams: response.data.streams
      });
      console.log('Twitch stream state has been set to:', tile.state.streams);
    }).catch((error) => {
      console.error('ERROR GETTING A RESPONSE FROM fetchTwitch:', error);
    });
};

export default fetchTwitch;