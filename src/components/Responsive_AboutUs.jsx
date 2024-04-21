import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="slider-container container about-us">
      <Slider {...settings}>
        <div>
          <div className="card card-1">
            <h4>Safe Payments</h4>
            <p>
              Make secure payments and settlements, we will protect your funds.
            </p>
          </div>
        </div>
        <div>
          <div className="card card-2">
            <h4>Support</h4>
            <p>
              Need help or have a wish for our store? Contact our 24/7 support.
            </p>
          </div>
        </div>
        <div>
          <div className="card card-3">
            <h4>From Games</h4>
            <p>
              Special selections of offers are available for you and your
              friends.
            </p>
          </div>
        </div>
        <div>
          <div className="card card-4">
            <h4>Our Stores</h4>
            <p>6 modern stores with a wide range of offers just for you.</p>
          </div>
        </div>
        <div>
          <div className="card card-5">
            <h4>Customers</h4>
            <p>
              More than 5,000 customers satisfied with our services per year.
            </p>
          </div>
        </div>
        <div>
          <div className="card card-6">
            <h4>Experience</h4>
            <p>
              Our company has been working in this field for more than 8 years.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
