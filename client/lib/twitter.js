import React from 'react';
import axios from 'axios';

const fetchTweets = (tile) => {
  axios.get('/twitter')
    .then((response) => {
      tile.setState({
        tweets: tile.state.tweets.concat(response.data)
      })
    })
    .catch((err) => {
      console.log(`Error in fetching tweets: ${err}`)
    });
};

export default fetchTweets;