
import videoFile from '../../assets/videos/video2.mp4'
import poster from '../../assets/images/poster.png'
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
const LiveSessionContent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

   const styles = {
  container: {
    // position: "relative",
    // display: "inline-block",
    // width: "800px",
    // maxWidth: "100%",
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "50%",
    padding: "20px",
    cursor: "pointer",
    zIndex: 2,
  },
  playIcon: {
    color: "#fff",
    fontSize: "40px",
  },
};
  return (
    <>
      <div className='position-relative' >
        <div className='live-session '>
          <video ref={videoRef}  controls={isPlaying} onPause={() => setIsPlaying(false)}  width={'100%'}  poster={poster}>
            <source src={videoFile} type="video/mp4" />
          </video>
           {!isPlaying && (
        <div style={styles.overlay} onClick={handlePlay}>
          <FaPlay style={styles.playIcon} />
        </div>
      )}
        </div>
      </div> 
    </>
  )
}

export default LiveSessionContent