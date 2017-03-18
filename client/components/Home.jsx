import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myGames: ['overwatch', 'fifa', 'rocketleague']
    }
  }

  render() {
    
    return (
      <div className="navbar navbar-inverse navbar-fixed-left">
        <div className="Logo">
          <img src="http://img00.deviantart.net/d3c6/i/2012/027/a/7/8_bit_1up_mushroom_by_nathanmarino-d4nt2xp.png" />
          <h2>ReUp</h2>
        </div>
        <div className="User">
          {/*stuff*/}
        </div>
        <div className="base-navigation">
          <ul>
            <li><a href>Explore</a></li>
            <li><a href>Overwatch</a></li>
          </ul>

          {/*<div className="user-games">
             map all games specific to user(currently hardcoded) into this "user-games" div 
            <h2>Overwatch</h2>
          </div>*/}

        </div>
      </div>
    )
  }
}

export default Home;