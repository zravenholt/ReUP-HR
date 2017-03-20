import React from 'react';
import GiantBombTile from '../components/GiantBomb/GiantBombTile.jsx';
import YoutubeTile from '../components/Youtube/YoutubeTile.jsx';
import RedditTile from '../components/Reddit/RedditTile.jsx';
import TwitterTile from '../components/Twitter/TwitterTile.jsx';
import TwitchTile from '../components/Twitch/TwitchTile.jsx';

let Feed = (props) => (
  <div className="mainView pre-scrollable">
    
      <GiantBombTile giantBombName={props.game.giantBombName}/>
    
      <YoutubeTile youtubeChannelId={props.game.youtubeChannelId}/>
    
      <RedditTile subRedditName={props.game.subRedditName}/>
    
      <TwitchTile twitchQuery={props.game.twitchQuery}/>
    
      <TwitterTile twitterName={props.game.twitterName}/>
    
  </div>
);

export default Feed;