import React from 'react';
import YoutubeTile from './Youtube/YoutubeTile.jsx';
import RedditTile from './Reddit/RedditTile.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }
  //arglebargle

  render() {
    return (
        <div>
          Hello World!!!
          {/*<ignTile />
          <redditTile />
          <youtubeTile />*/}
          <RedditTile />
          <YoutubeTile/>
        </div>
    );
  }
}

export default App;