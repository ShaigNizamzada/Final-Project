import React, { useContext, useEffect, useState } from "react";
import Responsive_categories from "../components/Responsive_categories";
import Responsive_TopSellers from "../components/Responsive_TopSellers";
import Responsive_Hero from "../components/Responsive_Hero";
import Hero from "../components/Hero";
import { ProductContext } from "../context/ProductContext";
import SingleProduct2 from "../components/SingleProduct2";
import StarWars from "../components/StarWars";
import DiscoverAll from "../components/DiscoverAll";
import SingleProduct from "../components/SingleProduct";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const [product] = useContext(ProductContext);
  const [category, setCategory] = useState("Action");

  const filteredData = product.filter((item) => item.category === category);
  return (
    <>
      <div className="row">
        <div
          className="col-lg-12 col-xl-9 col-md-12 col-sm-12 col-12"
          data-aos="fade-right"
        >
          <Hero />
        </div>
        <div className="col-xl-3 discounted-games mt-4" data-aos="fade-left">
          <span className="me-3 fs-5">
            <i class="fa-solid fa-percent"></i>
          </span>
          <span className="fs-5 fw-bolder">Discounted Games</span>
          <div className="me-2 mt-3">
            {product.slice(0, 5).map((item) => (
              <SingleProduct2
                key={item.id}
                title={item.title}
                photo={item.photo}
                rating={item.rating}
                price={item.price}
                alldata={item}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="responsive--categories--section" data-aos="flip-up">
        <Responsive_categories />
      </div>
      <Responsive_TopSellers />
      <div className="responsive--hero--section" data-aos="zoom-in-down">
        <Responsive_Hero />
      </div>

      <div className="row category--store--games mt-5">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
          <div
            className="popular--by--category--section ms-3 p-3 mb-2"
            data-aos="fade-right"
          >
            <h3>Popular By Category</h3>
            <ul>
              <li onClick={() => setCategory("Action")}>Action</li>
              <li onClick={() => setCategory("Adventure")}>Adventure</li>
              <li onClick={() => setCategory("Casual")}>Casual</li>
              <li onClick={() => setCategory("Horror")}>Horror</li>
              <li onClick={() => setCategory("Indie")}>Indie</li>
              <li onClick={() => setCategory("Racing")}>Racing</li>
              <li onClick={() => setCategory("RPG")}>RPG</li>
            </ul>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mb-5">
          <div className="store--section ms-3" data-aos="fade-left">
            <div className="slider-container">
              {
                <Slider {...settings}>
                  {filteredData.map((item) => (
                    <SingleProduct
                      key={item.id}
                      title={item.title}
                      photo={item.photo}
                      rating={item.rating}
                      price={item.price}
                      alldata={item}
                      id={item.id}
                    />
                  ))}
                </Slider>
              }
            </div>
          </div>
        </div>
      </div>
      <StarWars />
      <DiscoverAll />
    </>
  );
};

export default Home;
