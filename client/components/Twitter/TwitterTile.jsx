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
    fetchTweets(this, this.props.twitterName);
  }

  render() {
    return (
      <div className="row">
        <div className="Tile">
          <h3>Overwatch Twitter Posts:</h3>
          <div className="pre-scrollable"> 
          {this.state.tweets.map((tweet) => 
            <Tweet key={ tweet.id_str } tweet={ tweet }/>
          )}
          </div>
        </div>
      </div>
    )
  }
}

export default TwitterTile;