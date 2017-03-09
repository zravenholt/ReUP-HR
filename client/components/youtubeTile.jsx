var youtubeTile = (props) => (
  <div>
    <div>
      <iframe src={'https://www.youtube.com/embed/' + props.video.id.videoId}></iframe>
    </div>
    {/*<div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>*/}
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.youtubeTile = youtubeTile;