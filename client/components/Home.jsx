import React from 'react';
import dbQuery from '../lib/dbQuery.js';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGames: []
    }
  }
  componentDidMount () {
    dbQuery(this, 'overwatch');
  }
  render() {    
    return (
      <div className="navbar navbar-inverse navbar-fixed-left">
        <div className="Logo">
          <img src="http://img00.deviantart.net/d3c6/i/2012/027/a/7/8_bit_1up_mushroom_by_nathanmarino-d4nt2xp.png" />
          <h2 className="Title">ReUp</h2>
        </div>
        <div className="User">
        </div>
        <div className="base-navigation">
          <ul>
            <li><Link to='/explore'>Explore</Link></li>
            <li><Link to='/feed'>Overwatch</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home;