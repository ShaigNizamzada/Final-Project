import React from "react";
import videoBg from "../assets/video/nfs_heat.mp4";
const VideoNfs = () => {
  return (
    <div className="main--video mx-3 my-3">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <div className="row">
          <div className="col-6 p-3">
            <h2 className=""></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoNfs;
