import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';

export default function Streaming(props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        config={{
          file: {
            forceHLS: true,
          },
        }}
        controls
        url={props.url}
        width="100%"
        height="100%"
        playing={true}
      />
    </div>
  );
}