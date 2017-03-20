import React from 'react';

const PolygonNews = ({ content }) => {
return (
    <div className='container'>
      <div className='contentTitle'>{ content.title }</div>
      <img className='contentImage' src={ content.urlToImage } />
      <div className='contentDescription'>{ content.description } { ` - ${ content.author }`}</div>
      <a href={ content.url }>Read more... </a>
      {/*<div className='contentDate'>{ content.publishedAt }</div>*/}
    </div>
  );
}

export default PolygonNews;