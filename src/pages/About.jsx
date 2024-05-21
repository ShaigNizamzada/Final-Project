import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveAboutUs from "../components/Responsive_AboutUs";
import AccordionEn from "../components/AccordionEn";
import AccordionAz from "../components/AccordionAz";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useTranslation } from "react-i18next";
const About = () => {
  document.title = "About";
  const { t, i18n } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="about--section">
        <div className="header--text--section" data-aos="zoom-in">
          <h1 className="text-center my-5 header--text">{t("about.0")}</h1>
          <div className="paragraph--text--section">
            <p className="text-center">{t("about.1")}</p>
            <p className="text-center">{t("about.2")}</p>
          </div>
        </div>
        <div className="carousel--section" data-aos="fade-up">
          <ResponsiveAboutUs />
        </div>
        <div className="row my-5 bottom--section">
          <div className="col-xl-5 col-lg-5 col-sm-12 col-12">
            <div className="first-section ms-3" data-aos="fade-right">
              <h1 className="fw-bold mb-3">{t("about.3")}</h1>
              <p>{t("about.4")}</p>
              <Link to="/contact" className="contact--us--button">
                <button className="button">{t("about.5")}</button>
              </Link>
            </div>
          </div>{" "}
          <div className="col-xl-7 col-lg-7 col-sm-12 col-12">
            <div className="accordion--section" data-aos="fade-left">
              {i18n.language === "en" ? <AccordionEn /> : <AccordionAz />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
