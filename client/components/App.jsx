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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2">
            <Home />
          </div>
          {/*<div className="col-sm-10 col-md-10 col-lg-10">
            <Explore />
          </div>*/}
          <div className="col-sm-10 col-md-10 col-lg-10">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

export default App;