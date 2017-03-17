import React from 'react';
import Feed from '../containers/Feed.jsx';
import Home from './Home.jsx';
import Explore from '../containers/Explore.jsx'

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
      <div className="All">
        <Home />
        <Explore />
        <Feed />
      </div>
    );
  }
}

export default App;