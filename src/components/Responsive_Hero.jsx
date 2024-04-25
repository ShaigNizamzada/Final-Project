import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
function Responsive_Hero() {
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
    <div className="slider-container mt-5">
      <Slider {...settings}>
        <div className="responsivehero--first--slide responsivehero--slide">
          <div className="available--on--section mt-3" data-aos="fade-up">
            <span>Now on Nintendo Switch system</span>
            <h3 className="text-light">Hogwarts Legasy</h3>
            <p>
              The wizarding worlds awaits you Freely roam Hogwarts, <br />{" "}
              Hogsmade, The Forbidden Forest, Overland Area
            </p>
            <Link to="/sale" className="buy--now--button">
              <button className="button">Buy Now</button>
            </Link>
          </div>
        </div>
        <div className="responsivehero--second--slide responsivehero--slide">
          <div className="available--on--section mt-3" data-aos="fade-up">
            <span>Discount off 20%</span>
            <h3 className="text-light">Need For Speed Unbound</h3>
            <p>
              Race against time, outsmart the cops, and take on weekly <br />
              qualifiers to reach The Grand, Lakeshore’s ultimate street.
            </p>
            <Link to="/sale" className="buy--now--button">
              <button className="button">To Shop</button>
            </Link>
          </div>
        </div>
        <div className="responsivehero--third--slide responsivehero--slide">
          <div className="available--on--section mt-3" data-aos="fade-up">
            <span>Now available</span>
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
          <div className="available--on--section mt-3" data-aos="fade-up">
            <span>Hell welcomes all</span>
            <h3 className="text-light">DIABLO IV</h3>
            <p>
              Action RPG experience with endless evil to slaughter, <br />{" "}
              countless abilities to master, nightmarish dungeons.
            </p>
            <Link to="/sale" className="buy--now--button">
              <button className="button">Buy Now</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive_Hero;
