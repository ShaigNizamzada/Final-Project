import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
function Responsive_Hero() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container container-fluid mt-5 pe-0 ms-2">
      <Slider {...settings}>
        <div className="responsivehero--first--slide responsivehero--slide">
          <div className="available--on--section" data-aos="fade-up">
            <span>{t("resHero.0")}</span>
            <h3 className="text-light">Hogwarts Legasy</h3>
            <p>{t("resHero.1")}</p>
            <Link to="/sale" className="buy--now--button">
              <button className="button">{t("resHero.2")}</button>
            </Link>
          </div>
        </div>
        <div className="responsivehero--second--slide responsivehero--slide">
          <div className="available--on--section" data-aos="fade-up">
            <span>{t("resHero.3")}</span>
            <h3 className="text-light">Need For Speed Unbound</h3>
            <p>{t("resHero.4")}</p>
            <Link to="/sale" className="buy--now--button">
              <button className="button">{t("resHero.2")}</button>
            </Link>
          </div>
        </div>
        <div className="responsivehero--third--slide responsivehero--slide">
          <div className="available--on--section" data-aos="fade-up">
            <span>{t("resHero.5")}</span>
            <h3 className="text-light">
              The Legend of Zelda <br /> Tears of the Kingdom
            </h3>
            <br />
            <Link to="/sale" className="buy--now--button">
              <button className="button">Buy Now</button>
            </Link>
          </div>
        </div>
        <div className="responsivehero--fourth--slide responsivehero--slide">
          <div className="available--on--section" data-aos="fade-up">
            <span>{t("resHero.6")}</span>
            <h3 className="text-light">DIABLO IV</h3>
            <p>{t("resHero.7")}</p>
            <Link to="/sale" className="buy--now--button">
              <button className="button">{t("resHero.2")}</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive_Hero;
