import React, { Component } from 'react';
import YoutubeVideo from './YoutubeVideo.jsx';
import axios from 'axios';
import keys from '../../../config/keys.js'
const game = 'overwatch'; //hardcoded game for now


class YoutubeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${game}&type=video&videoCaption=closedCaption&key=${keys.YOUTUBE_API_KEY}`)
      .then((response) => {
        console.log('response: ', response.data.items);
        this.setState ({
          videos: this.state.videos.concat(response.data.items)
        });
      })
      .catch((err) => {
        console.log(`Error in fetching youtube data: ${err}`);
      })
  }

  render() {
    return (
      <div>
        {this.state.videos.map((video) => 
        <YoutubeVideo key={video.id.videoId} video={ video }/>
        )}
      </div>
    );
  }
}

export default YoutubeTile;