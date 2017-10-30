import React, { Component } from 'react';
import axios from 'axios';
import fetchTwitch from '../../lib/twitch.js';
import TwitchStream from './TwitchStream.jsx';

class TwitchTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streams: []
    }
  }

  componentDidMount() {
    fetchTwitch(this, this.props.twitchQuery);
  }

  render() {
    return (
      <div className="TwitchTile">
        <h3>Twitch Stream of the Day</h3>
        {this.state.streams.map((stream) => 
        <TwitchStream key={stream._id} stream={ stream }/>
        )}
      </div>
    );
  }
}

export default TwitchTile;