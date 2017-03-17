import React from 'react';

const RedditPost = (props) => {
  console.log('IN REDDIT POST');
  console.log('POST: ', props);
  return (
    <div>
      <a href={`http://www.reddit.com${props.data.permalink}`}>
        <div>{props.data.title}</div>
      </a>
      <a href={props.data.url}>
        <img src={props.data.thumbnail}/>
      </a>
      <div> ⬆ {props.data.score}</div>
    </div>
  );
};

export default RedditPost;
