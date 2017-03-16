import React from 'react';

const TwitchStream = function({stream}) {
  return (
    <div>
      <img src={stream.channel.logo} width="15%" height="15%"/>
      <h3>{stream.channel.display_name}'s Channel</h3>
      <iframe
        src={`http://player.twitch.tv/?channel=${stream.channel.name}&autoplay=false`}
        height="480"
        width="800"
        frameBorder="0"
        scrolling="no"
        allowFullScreen="true">
      </iframe>
    </div>
  );
};

export default TwitchStream;