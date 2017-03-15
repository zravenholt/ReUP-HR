//requests to reddit through reddit api

import axios from 'axios';
import React from 'react';

const getReddit = function (tile, subReddit) {
  axios.get(`https://www.reddit.com/r/${subReddit}/top/.json?sort=top&t=day`)
    .then((response) => {
      console.log('REDDIT: ', response.data.data.children);
      tile.setState({
        posts: tile.state.posts.concat(response.data.data.children)
      });
    });
};


module.exports.getReddit = getReddit;