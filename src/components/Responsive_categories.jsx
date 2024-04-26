import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Responsive_categories() {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container my-5 ms-2">
      <Slider {...settings}>
        <div className="action--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-action-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.0")}</h4>
          </div>
        </div>
        <div className="adventure--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-adventure-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.1")}</h4>
          </div>
        </div>
        <div className="casual--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-casual-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.2")}</h4>
          </div>
        </div>
        <div className="horror--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-horror-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.3")}</h4>
          </div>
        </div>
        <div className="indie--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-indie-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.4")}</h4>
          </div>
        </div>
        <div className="racing--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-racing-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.5")}</h4>
          </div>
        </div>
        <div className="rpg--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-rpg-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.6")}</h4>
          </div>
        </div>
        <div className="simulation--section category--section">
          <Link to="/sale">
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/wd-vgs-simulation-d-1.jpg"
              alt=""
              width={210}
            />
          </Link>
          <div className="category--section--text">
            <h4 className="text-light">{t("resCat.7")}</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive_categories;
