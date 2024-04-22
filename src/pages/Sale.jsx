import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "../components/SingleProductSale";
import { Slider } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
const Sale = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [product] = useContext(ProductContext);
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 100,
  });
  const handleRange = (event) => {
    setPrice({
      ...price,
      minPrice: event[0],
      maxPrice: event[1],
    });
  };

  const filteredPrice = product.filter(
    (item) => item.price >= price.minPrice && item.price <= price.maxPrice
  );
  const filteredProduct = filteredPrice.filter(
    (item) => item.category === category
  );
  return (
    <>
      <div className="sale--section">
        <div className="sale--section--top p-3">
          <Link className="sale--button" to="/">
            <span>Home </span>
          </Link>
          <span>/ </span>
          <span>All Games</span>
        </div>
        <div className="sale--section--middle" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7 col-md-10 col-sm-12 col-12">
              <div className="text--section">
                <p>Discounts up to -75%</p>
                <h1 className="text-light">Super Week Sale</h1>
                <p>
                  Spring is the nicest season. It’s the one that shows up and
                  shovels all the Winter snow off your driveway, tips its hat at
                  you, and strolls away. Then it wakes all the bears and
                  squirrels out of hibernation and fills up all the streams with
                  babbling water.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sale--section--bottom mt-5">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 ">
              <div
                className="sale--section--bottom--left mt-4 p-4"
                data-aos="fade-right"
              >
                <div className="price-slider">
                  <h4>Price</h4>
                  <div className="d-flex justify-content-between">
                    <span>£ {price.minPrice}</span>
                    <span>£ {price.maxPrice}</span>
                  </div>
                  <Slider
                    range
                    max={100}
                    step={15}
                    defaultValue={[0, 100]}
                    onChange={handleRange}
                  />
                  <p>
                    Price: <span className="fw-bold">£0 — £100</span>{" "}
                  </p>
                </div>
                {/* {product.filter(
                  (item) =>
                    item.price >= price.minPrice && item.price <= price.maxPrice
                )} */}
                <hr className="mx-3" />
                <h4>Categories</h4>
                <ul className="d-flex flex-column flex-wrap gap-2">
                  <li className="fs-4" onClick={() => setCategory("")}>
                    All
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Action")}>
                    Action
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Adventure")}>
                    Adventure
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Casual")}>
                    Casual
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Horror")}>
                    Horror
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Indie")}>
                    Indie
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Racing")}>
                    Racing
                  </li>
                  <li className="fs-4" onClick={() => setCategory("RPG")}>
                    RPG
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
              <div
                className="row sale--section--right--left ms-1 mt-4"
                data-aos="fade-left"
              >
                {/* <SingleProductSaleList /> */}

                {!category
                  ? filteredPrice.map((item) => (
                      <SingleProductSale
                        key={item.id}
                        title={item.title}
                        photo={item.photo}
                        rating={item.rating}
                        price={item.price}
                        alldata={item}
                      />
                    ))
                  : filteredProduct.map((item) => (
                      <SingleProductSale
                        key={item.id}
                        title={item.title}
                        photo={item.photo}
                        rating={item.rating}
                        price={item.price}
                        alldata={item}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
