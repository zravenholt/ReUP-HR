import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div>
      <div>{ tweet.user.name}</div>
      <div><img src={ tweet.user['profile_image_url_https'] }/></div>
      <div>{ tweet.text }</div>
      <div>{ tweet['created_at'] }</div>
      <div>{ tweet.user['screen_name'] }</div>
    </div>
  );
};

export default Tweet;