import React from "react";
import videoBg from "../assets/video/nfs_heat.mp4";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const VideoNfs = () => {
  const { t } = useTranslation();
  return (
    <div className="main--video ms-2 my-3">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
      <div className="image--nfs">
        <img
          src="https://wallpapers.com/images/hd/n-f-s-heat-logo-hsbqyqwgojvgd3ux.jpg"
          alt=""
          width={300}
        />
        <Link to="/sale/need-for-speed-heat" className="link">
          <button className="button d-flex px-5 py-2 mt-4 w-100 fs-5">
            {t("resHero.2")}!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoNfs;
