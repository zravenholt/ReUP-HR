import React from 'react';
import IGNExplore from '../components/IGN/IGNExplore.jsx';
import PolygonExplore from '../components/Polygon/PolygonExplore.jsx';

const Explore = () => {
  return (
    <div>
      <img className='exploreIcon' src={ '../styles/Compass2.png' }/>
      <IGNExplore />
      <PolygonExplore />
    </div>
  );
};

export default Explore;