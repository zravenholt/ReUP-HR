import axios from 'axios';
import keys from '../../config/keys.js';
import React, { Component } from 'react';
const game = 'overwatch'; //hardcoded game for now


const fetchYoutube = (tile) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${game}&type=video&videoCaption=closedCaption&key=${keys.YOUTUBE_API_KEY}`)
    .then((response) => {
      tile.setState ({
        videos: tile.state.videos.concat(response.data.items)
      });  
    })
    .catch((err) => {
      console.log(`Error in fetching youtube data: ${err}`);
    })
}

export default fetchYoutube;