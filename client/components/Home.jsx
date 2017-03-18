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
        <h2>ReUp</h2>
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