import YoutubeTile from '../components/Youtube/YoutubeTile.jsx';
import React from 'react';
import RedditTile from '../components/Reddit/RedditTile.jsx';

let Feed = ({props}) => (
  <div>
    <div>
      <YoutubeTile />
    </div>
    <div>
      <RedditTile />
    </div>
  </div>
);

export default Feed;