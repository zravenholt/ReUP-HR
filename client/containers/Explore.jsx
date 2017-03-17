import React from 'react';
import IGNExplore from '../components/IGN/IGNExplore.jsx';
import PolygonExplore from '../components/Polygon/PolygonExplore.jsx';

const Explore = () => {
  return (
    <div className="mainView pre-scrollable">
      <IGNExplore />
      <strong>Polygon</strong>
      <PolygonExplore />
    </div>
  );
};

export default Explore;