import React from 'react';
import YoutubeTile from './Youtube/YoutubeTile.jsx';
<<<<<<< HEAD
import Feed from '../containers/Feed.jsx';
import Home from './Home.jsx';
=======
import RedditTile from './Reddit/RedditTile.jsx';

>>>>>>> Implement reddit API

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
          <Home />
          <div>

            <div>
              <Feed />
            </div>
          </div>
        </div>
    );
  }
}

export default App;