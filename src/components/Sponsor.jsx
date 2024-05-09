import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
const Sponsor = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="marquee--container container-fluid my-5">
        <h3 className="mb-5">{t("home.15")}</h3>
        <Marquee play pauseOnClick>
          <div className="marquee--section">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/EA_Sports_monochrome_logo.svg"
              alt=""
              className="marquee--image"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Konami_Logo.png"
              alt=""
              className="marquee--image-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Frostbite_logo.svg/1200px-Frostbite_logo.svg.png"
              alt=""
              className="marquee--image"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Activision.svg/1280px-Activision.svg.png"
              alt=""
              className="marquee--image"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1216020092451991552/GnKCDYFp_400x400.jpg"
              alt=""
              className="marquee--image"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Riot_Games_wordmark.svg/2560px-Riot_Games_wordmark.svg.png"
              alt=""
              className="marquee--image-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg"
              alt=""
              className="marquee--image"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png"
              alt=""
              className="marquee--image"
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Sponsor;
