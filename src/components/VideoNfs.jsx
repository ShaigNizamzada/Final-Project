import React from "react";
import videoBg from "../assets/video/nfs_heat.mp4";
const VideoNfs = () => {
  return (
    <div className="main--video mx-3 my-3">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  );
};

export default VideoNfs;
