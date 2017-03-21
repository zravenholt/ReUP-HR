import React from 'react';
import Tweet from './Tweet.jsx';
import fetchTweets from '../../lib/twitter.js';

class TwitterTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    fetchTweets(this, this.props.game.twitterName);
  }

  render() {
    return (
      <div className="TwitterTile">
        <h3>{this.props.game.gameName} Twitter Posts:</h3>
        <div className="pre-scrollable postScroller"> 
        {this.state.tweets.map((tweet) => 
          <Tweet key={ tweet.id_str } tweet={ tweet }/>
        )}
        </div>
      </div>
    )
  }
}

export default TwitterTile;