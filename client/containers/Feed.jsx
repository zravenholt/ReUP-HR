import React from 'react';
import GiantBombTile from '../components/GiantBomb/GiantBombTile.jsx';
import YoutubeTile from '../components/Youtube/YoutubeTile.jsx';
import RedditTile from '../components/Reddit/RedditTile.jsx';
import TwitterTile from '../components/Twitter/TwitterTile.jsx';
import TwitchTile from '../components/Twitch/TwitchTile.jsx';

let Feed = ({props}) => (
  <div>
    <div>
      <GiantBombTile />
    </div>
    <div>
      <YoutubeTile />
    </div>
    <div>
      <RedditTile />
    </div>
    <div>
      <TwitchTile />
    </div>
    <div>
      <TwitterTile />
    </div>
  </div>
);

export default Feed;