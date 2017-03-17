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
    fetchTwitch(this);
  }

  render() {
    return (
      <div className="Tile">
        {this.state.streams.map((stream) => 
        <TwitchStream key={stream._id} stream={ stream }/>
        )}
      </div>
    );
  }
}

export default TwitchTile;