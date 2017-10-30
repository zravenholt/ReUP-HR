import React, { Component } from 'react';
import YoutubeVideo from './YoutubeVideo.jsx';
import fetchYoutube from '../../lib/youtube.js';

class YoutubeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    fetchYoutube(this, this.props.game.youtubeChannelId);
  }

  render() {
    return (
      <div className="YoutubeTile">
        <h3>{this.props.game.gameName} on Youtube</h3>
        <div className="pre-scrollable postScroller">
        {this.state.videos.map((video) => 
        <YoutubeVideo key={video.id.videoId} video={ video }/>
        )}
        </div>
      </div>
    );
  }
}

export default YoutubeTile;