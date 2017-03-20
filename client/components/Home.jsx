import React from 'react';

import { Link } from 'react-router-dom';


const Home = (props) => (

      <div className="navbar navbar-inverse navbar-fixed-left">
        <div className="Logo">
          <img src="http://img00.deviantart.net/d3c6/i/2012/027/a/7/8_bit_1up_mushroom_by_nathanmarino-d4nt2xp.png" />
          <h2 className="Title">ReUp</h2>
        </div>
        <div className="User">
        </div>
        <div className="base-navigation">
          
          <ul>
            <li><Link to="/explore">Explore</Link></li>
            {props.myGames.map((game) => 
            <li onClick={function (){props.changeGame(game)}}><Link to="/feed">{game.gameName}</Link></li>
            )}
            <li><Link to="/addgame">Add Game...</Link></li>
          </ul>

        </div>
      </div>
    )

export default Home;