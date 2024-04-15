/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { WrapperVideoPlayer } from "./VideoPlayer.style";

interface IVideo {
    showVideo: boolean
}
const VideoPlayer = ({showVideo}: IVideo) => {
  return (
    <WrapperVideoPlayer isActive={showVideo}>
      <video width="500" id="video1" height="300" autoPlay controls>
        <source src="./media/video1.webm" type="video/webm"/>
        <source src="./media/video1.mp4" type="video/mp4" />
        <source src="./media/video1.ogg" type="video/ogg"/>  
      </video>
    </WrapperVideoPlayer>
  );
};

export default VideoPlayer;
