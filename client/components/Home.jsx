import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    
    return (
      <div className="home-bar">
        <h1>Our App</h1>
        <div className="user">
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