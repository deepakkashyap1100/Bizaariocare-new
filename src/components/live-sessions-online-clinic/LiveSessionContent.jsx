import React from 'react'
import videoFile from '../../assets/videos/video2.mp4'
const LiveSessionContent = () => {
  return (
      <>
          <div>
                <video   controls="controls" autoplay="false"  width={'100%'} height={450} >
                              <source src={videoFile} type="video/mp4"/>
                          </video>
        </div>
      </>
  )
}

export default LiveSessionContent