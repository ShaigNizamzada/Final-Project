import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function Responsive() {
  const { t } = useTranslation();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container container about-us">
      <Slider {...settings}>
        <div>
          <div className="card card-1">
            <h4>{t("resAbout.0")}</h4>
            <p>
              {t("resAbout.1")}
            </p>
          </div>
        </div>
        <div>
          <div className="card card-2">
            <h4>{t("resAbout.2")}</h4>
            <p>
             {t("resAbout.3")}
            </p>
          </div>
        </div>
        <div>
          <div className="card card-3">
            <h4>{t("resAbout.4")}</h4>
            <p>
              {t("resAbout.5")}
            </p>
          </div>
        </div>
        <div>
          <div className="card card-4">
            <h4>{t("resAbout.6")}</h4>
            <p>{t("resAbout.7")}.</p>
          </div>
        </div>
        <div>
          <div className="card card-5">
            <h4>{t("resAbout.8")}</h4>
            <p>
              {t("resAbout.9")}
            </p>
          </div>
        </div>
        <div>
          <div className="card card-6">
            <h4>{t("resAbout.10")}</h4>
            <p>
              {t("resAbout.11")}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
