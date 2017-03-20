import React from 'react';
import Home from './Home.jsx';
import Explore from '../containers/Explore.jsx';
import Feed from '../containers/Feed.jsx';
import {
  BrowserRouter as Router,
  IndexRoute,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2">
              <Home />
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10">
              <Route path="/explore" component={Explore} />
              <Route path="/feed" component={Feed} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;