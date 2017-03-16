import React from 'react';

const GiantBombInfo = ({ game, images }) => {
  return (
    <div>
      <div><img src={images.super_url} /></div>
      <div><a href={game.site_detail_url}>{game.name}</a></div>
      <div>{game.deck}</div>
    </div>
  );
}

export default GiantBombInfo;