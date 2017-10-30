import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div className="Post">
      <a href={tweet.entities.urls[0] ? tweet.entities.urls[0].url : null}>
        <div>{ tweet.user['screen_name'] }</div>
      </a>
      <div><img src={ tweet.user['profile_image_url_https'] }/></div>
      <div>{ tweet.text }</div>
      <div>{ tweet['created_at'] }</div>
      <div>{tweet.favorite_count} ❤</div>
      <br></br>
    </div>
  );
};

export default Tweet;