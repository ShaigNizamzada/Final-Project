import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
function CustomSlide(props) {
  useEffect(() => {
    Aos.init();
  }, []);
  const { index, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <h3>{index}</h3>
    </div>
  );
}

function CustomSlides() {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-container--hero my-4 ps-1">
      <Slider {...settings}>
        <CustomSlide
          className="custom--slide custom--slide--1"
          index={
            <>
              <div className="custom--slides mt-5 ms-5" data-aos="fade-up">
                <div className="custom--slides--logo">
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-slide-di-2-logo.png.webp"
                    alt=""
                    className=""
                  />
                </div>
                <div className="available--on--section d-flex mt-3 ">
                  <span className="fs-6 me-3">{t("hero.0")}</span>
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-pc.svg"
                    alt=""
                    className="me-2"
                  />
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-xbox.svg"
                    alt=""
                    className="me-2"
                  />
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-ps5.svg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="col-sm-5 col-10">
                    <p className="fs-6 mt-3">{t("hero.1")}</p>
                  </div>
                </div>
                <div className="take--it--now--section d-flex">
                  {" "}
                  <Link className="take--it--now" to="/sale">
                    <button className="button me-2">{t("hero.2")}</button>
                  </Link>
                  <span className="fs-5 pt-2 ps-3">{t("hero.3")}</span>
                </div>
              </div>
            </>
          }
        />
        <CustomSlide
          className="custom--slide custom--slide--2"
          index={
            <>
              <div className="custom--slides mt-5 ms-5" data-aos="fade-up">
                <div className="custom--slides--logo">
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-slide-sf-logo.png.webp"
                    alt=""
                    className=""
                  />
                </div>
                <div className="available--on--section d-flex mt-3 ">
                  <span className="fs-6 me-3">{t("hero.0")}</span>
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-pc.svg"
                    alt=""
                    className="me-2"
                  />
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-xbox.svg"
                    alt=""
                    className="me-2"
                  />
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-ps5.svg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="col-sm-5 col-10">
                    <p className="fs-6 mt-3">{t("hero.4")}</p>
                  </div>
                </div>
                <div className="take--it--now--section d-flex">
                  {" "}
                  <Link className="take--it--now" to="/sale">
                    <button className="button me-2">{t("hero.2")}</button>
                  </Link>
                  <span className="fs-5 pt-2 ps-3">{t("hero.3")}</span>
                </div>
              </div>
            </>
          }
        />
        <CustomSlide
          className="custom--slide custom--slide--3"
          index={
            <>
              <div className="custom--slides mt-5 ms-5" data-aos="fade-up">
                <div className="custom--slides--logo">
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-slide-st-2-logo.png"
                    alt=""
                    className=""
                  />
                </div>
                <div className="available--on--section d-flex mt-3 ">
                  <span className="fs-6 me-3">{t("hero.0")}</span>
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-pc.svg"
                    alt=""
                    className="me-2"
                  />
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-xbox.svg"
                    alt=""
                    className="me-2"
                  />
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-lable-ps5.svg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="col-sm-5 col-10">
                    <p className="fs-6 mt-3">{t("hero.5")}</p>
                  </div>
                </div>

                <div className="take--it--now--section d-flex">
                  {" "}
                  <Link className="take--it--now" to="/sale">
                    <button className="button me-2">{t("hero.2")}</button>
                  </Link>
                  <span className="fs-5 pt-2 ps-3">{t("hero.3")}</span>
                </div>
              </div>
            </>
          }
        />
      </Slider>
    </div>
  );
}

export default CustomSlides;
