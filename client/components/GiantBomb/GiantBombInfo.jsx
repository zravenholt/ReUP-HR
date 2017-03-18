import React from 'react';

const GiantBombInfo = ({ game, images }) => {
  return (
    <div>
      <div className="leftmostOfTile"><img src={images.super_url} /></div>
      <div><h3>{game.name}</h3></div>
      <div>{game.deck}</div>
      <div><a href={game.site_detail_url}>Click here to learn more!</a></div>
    </div>
  );
}

export default GiantBombInfo;