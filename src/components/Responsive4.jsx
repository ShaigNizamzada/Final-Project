import React, { useContext } from "react";
import Slider from "react-slick";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "./SingleProduct";
function Responsive4() {
  const [product] = useContext(ProductContext);
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
  return (
    <div className="slider-container">
      {
        <Slider {...settings}>
          {product.map((item) => (
            <SingleProduct
              key={item.id}
              title={item.title}
              photo={item.photo}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </Slider>
      }
    </div>
  );
}

export default Responsive4;
