import React from 'react';

const IGNNews = ({ content }) => {
  return (
    <div className='container'>
      <div>{ content.author }</div>
      <div>{ content.title }</div>
      <div>{ content.description }</div>
      <a href={ content.url }>Read more... </a>
      <img src={ content.urlToImage } />
      <div>{ content.publishedAt }</div>
    </div>
  );
}

export default IGNNews;