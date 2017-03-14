import React from 'react';

const YoutubeVideo = ({ video }) => {
  console.log('hi');
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div>
        <iframe src={url}></iframe>
      </div>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  );
}

export default YoutubeVideo;