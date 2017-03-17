import React from 'react';
import Reddit from '../../lib/reddit.js';
import axios from 'axios';
import RedditPost from './RedditPost.jsx';

class RedditTile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    Reddit.getReddit(this, 'Overwatch');
    console.dir(this.state.posts);
  }

  render () {
    return (
      <div className="Tile">
        <div className = 'redditTitle'>Top Reddit Posts</div>
        <div className = 'redditPosts'>
          {this.state.posts.map((post) => 
            <RedditPost data={post.data}/>
          )}
        </div>
      </div>
    );
  }
}

export default RedditTile;