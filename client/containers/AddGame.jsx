import React from 'react';
import dbPost from '../lib/dbPost.js';
import {
  Redirect
} from 'react-router-dom';

class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      giantBombName: '',
      subRedditName: '',
      twitchQuery: '',
      youtubeChannelId: '',
      twitterName: '',
    };

    this.handleGameNameChange = this.handleGameNameChange.bind(this);
    this.handleGiantBombNameChange = this.handleGiantBombNameChange.bind(this);
    this.handleSubRedditNameChange = this.handleSubRedditNameChange.bind(this);
    this.handleTwitchQueryChange = this.handleTwitchQueryChange.bind(this);
    this.handleYoutubeChannelIdChange = this.handleYoutubeChannelIdChange.bind(this);
    this.handleTwitterNameChange = this.handleTwitterNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToPage = this.redirectToPage.bind(this);
  }

  handleGameNameChange(event) {
    this.setState({gameName: event.target.value});
  }

  handleGiantBombNameChange(event) {
    this.setState({giantBombName: event.target.value});
  }

  handleSubRedditNameChange(event) {
    this.setState({subRedditName: event.target.value});
  }

  handleTwitchQueryChange(event) {
    this.setState({twitchQuery: event.target.value});
  }

  handleYoutubeChannelIdChange(event) {
    this.setState({youtubeChannelId: event.target.value});
  }

  handleTwitterNameChange(event) {
    this.setState({twitterName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    dbPost(this, this.state.gameName, this.state.giantBombName, this.state.subRedditName, this.state.twitchQuery, this.state.youtubeChannelId, this.state.twitterName);
  }

  redirectToPage(response) {
    if(response.status === 200) {
      console.log('Called redirectToPage successfully with status of 200:', response.data[0].gameName);
      // window.location.href = `/#/${response.data[0].gameName}`;
      window.location.href = '/#/explore';
    } else {
      console.log('Server did not respond back with status code 200:', response.status);
    }
  }

  render() {

    return (
      <div>
        <h1>Please enter game information below!</h1>
        <form onSubmit={this.handleSubmit}>
          Game Name: <input type="text" value={this.state.gameName} onChange={this.handleGameNameChange}/><br></br>
          Giant Bomb Game Name: <input type="text" value={this.state.giantBombName} onChange={this.handleGiantBombNameChange}/><br></br>
          Subreddit Name: <input type="text" value={this.state.subRedditName} onChange={this.handleSubRedditNameChange}/><br></br>
          Twitch Query: <input type="text" value={this.state.twitchQuery} onChange={this.handleTwitchQueryChange}/><br></br>
          Youtube Channel ID: <input type="text" value={this.state.youtubeChannelId} onChange={this.handleYoutubeChannelIdChange}/><br></br>
          Twitter Handle: <input type="text" value={this.state.twitterName} onChange={this.handleTwitterNameChange}/><br></br>
          <input type="submit" value="Submit Game" />
        </form>
      </div>
    );

  }
}

export default AddGame;