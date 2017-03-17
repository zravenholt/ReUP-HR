import React from 'react';

const GiantBombInfo = ({ game, images }) => {
  return (
    <div>
      <div><h5>{game.name}</h5></div>
      <div><img src={images.super_url} /></div>
      <div>{game.deck}</div>
      <div><a href={game.site_detail_url}>Click here to learn more!</a></div>
    </div>
  );
}

export default GiantBombInfo;