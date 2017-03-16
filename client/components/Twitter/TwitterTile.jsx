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
    fetchTweets(this);
  }

  render() {
    return (
      <div>
        {this.state.tweets.map((tweet) => 
          <Tweet key={ tweet.id_str } tweet={ tweet }/>
        )}
      </div>
    )
  }
}

export default TwitterTile;