import React from 'react';
import dbQuery from '../lib/dbQuery.js';

import Home from './Home.jsx';
import Explore from '../containers/Explore.jsx';
import Feed from '../containers/Feed.jsx';
import AddGame from '../containers/AddGame.jsx';

import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myGames: [],
      currentGame: {}
    };

    this.changeGame = this.changeGame.bind(this);

  }

  componentDidMount () {
    dbQuery(this);
  }

  changeGame (game) {
    this.setState({
      currentGame: game
    })
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2">
              <Home myGames={this.state.myGames} changeGame={this.changeGame}/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10">
              <Redirect from="/" to="/explore" />
              <Route path="/explore" component={Explore} />
              <Route path="/feed" component={Feed} />
              <Route path="/addgame" component={AddGame} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;