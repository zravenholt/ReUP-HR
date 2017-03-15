import React from 'react';

const RedditPost = (props) => {
  console.log('IN REDDIT POST');
  console.log('POST: ', props);
  return (
    <div>
      <div>{props.data.title}</div>
      <img src={props.data.thumbnail}/>
      <div>{props.data.permalink}</div>
      <div>{props.data.score}</div>
    </div>
  );
};

export default RedditPost;
