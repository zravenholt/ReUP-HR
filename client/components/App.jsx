import React from 'react';
import YoutubeTile from './Youtube/YoutubeTile.jsx';
import Feed from '../containers/Feed.jsx';
import Home from './Home.jsx';

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