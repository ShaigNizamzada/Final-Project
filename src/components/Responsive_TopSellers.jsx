import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

function Responsive_TopSellers() {
  const [product] = useContext(ProductContext);
  const randomNumber = Math.floor(Math.random() * 36);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
  return (
    <div className="slider-container mt-5 mx-3 ">
      <div className="slider-container-header-section d-flex justify-content-between my-4">
        <h3 className="ms-2">Top Sellers</h3>

        <Link to="/sale" className="shop--all--button">
          <button className="btn btn-dark">Shop All</button>
        </Link>
      </div>
      {
        <Slider {...settings}>
          {product.slice(randomNumber, randomNumber + 6).map((item) => (
            <SingleProduct
              key={item.id}
              title={item.title}
              photo={item.photo}
              rating={item.rating}
              price={item.price}
              alldata={item}
            />
          ))}
        </Slider>
      }
    </div>
  );
}

export default Responsive_TopSellers;
