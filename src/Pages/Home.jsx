// AutoPlayVideo.js
import React, { useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import video1 from "../assets/video/video1.mp4"
const Home = () => {
  const videoRef = useRef(null);

  const handleHomeButtonClick = () => {
    videoRef.current.play();
  };

  return (
    <div>
      <button onClick={handleHomeButtonClick}>Home</button>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        {/* 16:9 aspect ratio */}
        <ReactPlayer
          ref={videoRef}
          url="https://youtu.be/xFOG_9Y883c?feature=shared"
          playing={true}
          controls
          width='100%'
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default Home;


// import React, { Component } from 'react'

// const Home = () => {
    
//         return (
//                 <div className='player-wrapper'>
//                 <video controls autoPlay
//                     src='../assets/video/video1.mp4'
//                     type='video/mp4'
//                     // poster='https://user-images.githubusercontent.com/28612032/172026551-e5a96748-d724-4a08-b6b3-f44655d4ef39.png'
//                     width="820">

                    

//                 </video>
//                 </div>
//         )
//     }

// export default Home;