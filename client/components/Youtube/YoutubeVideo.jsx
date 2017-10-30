import React from 'react';

const YoutubeVideo = ({ video }) => {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row YoutubeEntry">
      <div className="leftmostOfTile">
        <iframe src={url} allowFullScreen></iframe>
      </div>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  );
}

export default YoutubeVideo;