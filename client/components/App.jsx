import React from 'react';
import YoutubeTile from './Youtube/YoutubeTile.jsx';


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
          <YoutubeTile/>
        </div>
    );
  }
}

export default App;