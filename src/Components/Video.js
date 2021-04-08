import React from 'react';
import ReactPlayer from "react-video-js-player";
import Car from "../Static/videos/MarketinGame.mp4";

const Video = () => {

    const videoSrc = Car;

    return(
        <body>
            <br></br> 
            <center>
            <div className="video-player">
                <ReactPlayer src={videoSrc} width="700%"></ReactPlayer>
            </div>
            </center>
            <br></br>
        </body>
        
    )
}

export default Video;