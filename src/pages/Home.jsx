import React, { useContext, useEffect, useState } from "react";
import ResponsiveCategories from "../components/Responsive_categories";
import ResponsiveTopSellers from "../components/Responsive_TopSellers";
import ResponsiveHero from "../components/Responsive_Hero";
import Hero from "../components/Hero";
import { ProductContext } from "../context/ProductContext";
import SingleProduct2 from "../components/SingleProduct2";
import StarWars from "../components/StarWars";
import DiscoverAll from "../components/DiscoverAll";
import SingleProduct from "../components/SingleProduct";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
// import Blog from "./Blog";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import { useTranslation } from "react-i18next";
import VideoNfs from "../components/VideoNfs";
import Sponsor from "../components/Sponsor";
import NotebookAdv from "../components/NotebookAdv";
import CounterUp from "../components/CounterUp";

const Home = () => {
  document.title = "Home";
  const { t } = useTranslation();
  const blogs = useSelector((p) => p);
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
          <span className="fs-5 fw-bolder">{t("home.0")}</span>
          <div className="me-2 mt-3">
            {product.slice(22, 27).map((item) => (
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
        <ResponsiveCategories />
      </div>
      <ResponsiveTopSellers />
      <div className="responsive--hero--section" data-aos="zoom-in-down">
        <ResponsiveHero />
      </div>
      <div className="videoNfs-section">
        <VideoNfs />
      </div>
      <div className="row category--store--games mt-5 container-fluid">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
          <div
            className="popular--by--category--section ms-3 p-3"
            data-aos="fade-right"
          >
            <h3>{t("home.1")}</h3>
            <ul>
              <li onClick={() => setCategory("Action")}>{t("home.2")}</li>
              <li onClick={() => setCategory("Adventure")}>{t("home.3")}</li>
              <li onClick={() => setCategory("Casual")}>{t("home.4")}</li>
              <li onClick={() => setCategory("Horror")}>{t("home.5")}</li>
              <li onClick={() => setCategory("Indie")}>{t("home.6")}</li>
              <li onClick={() => setCategory("Racing")}>{t("home.7")}</li>
              <li onClick={() => setCategory("RPG")}>{t("home.8")}</li>
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
      <NotebookAdv />
      <div className="blog--section container-fluid my-5">
        <div className="row">
          <div className="d-flex justify-content-between mb-2">
            <h3 className="mb-1">{t("home.9")}</h3>
            <Link to="/blog" className="more--articles--button">
              <button className="btn btn-dark rounded-4">{t("home.10")}</button>
            </Link>
          </div>
          {blogs.slice(0, 3).map((item) => (
            <div className="col-xl-4 col-lg-6 col-12 col-md-6 col-sm-12 g-3">
              <div className="blog--section">
                <Link to={`/blog/${slugify(item.title)}`}>
                  <div className="blog--image--section">
                    <img className="blog--image" src={item.img} alt="" />
                  </div>
                </Link>
                <div className="blog--top--section d-flex flex-column">
                  <span className="text-center">16</span>
                  <span className="text-center">May</span>
                </div>
                <div className="blog--body--section">
                  <h6 className="text-center blog--text text-light">Blog</h6>
                  <Link
                    className="blog--item--title"
                    to={`/blog/${slugify(item.title)}`}
                  >
                    <h5 className="text-light text-center fw-bold blog--title">
                      {item.title}
                    </h5>
                  </Link>
                </div>
                <div className="blog--bottom--section">
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="text-light me-2">By</span>
                    <img
                      src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                      alt=""
                      height={18}
                      width={18}
                    />
                    <span className="text-light mx-2">Mr.Mackay</span>
                    <Link to={`/blog/${slugify(item.title)}`}>
                      <i class="fa-regular fa-comment text-light"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <Sponsor />
      <CounterUp />
    </>
  );
};

export default Home;
