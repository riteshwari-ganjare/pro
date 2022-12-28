import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./videoFooter.css";
//import Ticker from "nice-react-ticker"
const VideoFooter = ({channel,description,song}) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          {/* <Ticker mode="smooth"> 
          
            {
                ({index})=>(
                    <>
                    <p>{song}</p></>
                )
                }
           
          </Ticker> */}
          <p className="lead" style={{padding:"0 40px",fontWeight:"bold"}}>
               
                    {song}
                </p>
        </div>
      </div>
      <img className="videoFooter_Record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer"/>
    </div>
  );
};

export default VideoFooter;
