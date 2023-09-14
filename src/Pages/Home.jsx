import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

import video1 from "../assets/video/video1.mp4";

const Home = () => {
  const videoRef = useRef(null);

  return (
    <div>
      <div style={{ position: 'relative', paddingTop: '56.25%'  }}>
        <ReactPlayer
          ref={videoRef}
          url={video1}
          playing={true}
          loop={true}
          muted={true}
          width='100%'
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default Home;
