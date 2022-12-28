import React, { useState } from 'react'
import "./VideoSidebar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import './VideoSidebar.css'
const VideoSidebar = ({likes,shares,messages}) => {
    const [liked, setliked] = useState(false)
  return (<>
    <div className='videoSidebar'>
    <div className='videoSidebar_button'>
<i class="fab fa-tiktok"></i>
</div>
<div className='videoSidebar_button'>
    {liked? <FavoriteIcon fontSize='large' onClick={e=>setliked(false)}/>:<FavoriteBorderIcon fontSize='large' onClick={e=>setliked(true)}/>}
<p>{liked? likes+1:likes}</p>
</div>

<div className='videoSidebar_button'>
<MessageIcon fontSize='large'/>
<p>{messages}</p>
</div>
<div className='videoSidebar_button'>
<ShareIcon fontSize='large'/>
<p>{shares}</p>
</div>
</div>
   </>
  )
}

export default VideoSidebar