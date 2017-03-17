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
      <div className="HomeBar">
        <h1>Our App</h1>
        <div className="User">
          {/*stuff*/}
        </div>
        <div className="base-navigation">
          <h2>Explore</h2>
          <div className="user-games">
            {/* map all games specific to user(currently hardcoded) into this "user-games" div */}
            <h2>Overwatch</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;