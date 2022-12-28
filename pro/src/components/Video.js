import React, { useRef, useState } from 'react'
import './Video.css'

import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
const Video = ({url,channel,description,song,likes,shares,messages}) => {
    const [playing, setplaying] = useState(false);
    const videoRef=useRef(null);
    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause()
            setplaying(false)
        }else{
            videoRef.current.play()
            setplaying(true)
        }
    }
  return (
    <div className='video'>
        
        <video className='video_player' loop ref={videoRef} onClick={handleVideoPress} src={url} ></video>
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
    
  )
}

export default Video