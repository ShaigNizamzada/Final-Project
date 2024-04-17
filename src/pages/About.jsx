import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Responsive_AboutUs from "../components/Responsive_AboutUs";
import Accordion from "../components/Accordion";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="about--section">
        <div className="header--text--section" data-aos="zoom-in">
          <h1 className="text-center my-5 header--text">
            About our store and the history of its opening.
          </h1>
          <div className="paragraph--text--section">
            <p className="text-center">
              The online store of equipment and electronics is one of the
              leading online stores. The band was released in 25 volumes. During
              this time, our team sent 228 cypemapkets and managed to create a
              powerful, fast-working online store. The range of online supply
              points is huge and covers all company categories available for
              convenience stores. In 2019, we presented a new border policy
              strategy that covers all aspects.
            </p>
            <p className="text-center">
              The online store of equipment and electronics is one of the
              leading online stores. The band was released in 25 volumes. During
              this time, our team sent 228 cypemapkets and managed to create a
              powerful, fast-working online store.
            </p>
          </div>
        </div>
        <div className="carousel--section" data-aos="fade-up">
          <Responsive_AboutUs></Responsive_AboutUs>
        </div>
        <div className="row my-5 bottom--section">
          <div className="col-xl-5 col-lg-5 col-sm-12 col-12">
            <div className="first-section ms-3" data-aos="fade-right">
              <h1 className="fw-bold mb-3">
                Some of your questions <br /> answered here
              </h1>
              <p>
                We get a lot of questions about our course. You can get any
                answers in no time here.
              </p>
              <Link to="/contact" className="contact--us--button">
                <button className="button">Contact Us</button>
              </Link>
            </div>
          </div>{" "}
          <div className="col-xl-7 col-lg-7 col-sm-12 col-12">
            <div className="accordion--section" data-aos="fade-left">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
