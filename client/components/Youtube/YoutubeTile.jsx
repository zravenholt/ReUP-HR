import React, { Component } from 'react';
const YOUTUBE_API_KEY = 'AIzaSyAUXHsdx3NPpnczX6zYgj3YoVLEweK02bo';
const game = 'overwatch'; //hardcoded game for now
import YoutubeVideo from './YoutubeVideo';

class YoutubeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos = []
    }
    
    this.fetchYoutube = this.fetchYoutube.bind(this);
    this.fetchYoutube();
  }

  fetchYoutube() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${game}&type=video&videoCaption=closedCaption&key=${YOUTUBE_API_KEY}`)
      .then((response) => {
        console.log('response: ', response);
        this.setState ({
          videos = [...videos, response]
        });
      })
      .catch((err) => {
        console.log(`Error in fetching youtube data: ${err}`);
      })
  }

  render() {
    return (
      <div>
        {this.state.videos.map(video => {
          <YoutubeVideo video={video}/>
        })}
      </div>
    );
  }
}

export default YoutubeTile;