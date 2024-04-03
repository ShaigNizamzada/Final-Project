import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProductSale from "../components/SingleProductSale";
import { ProductContext } from "../context/ProductContext";

const Sale = () => {
  const [product] = useContext(ProductContext);
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
        <div className="sale--section--middle">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-4">
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
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
              <div className="sale--section--bottom--left"></div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row sale--section--right--left ms-1">
                {product.slice(0, 24).map((item) => (
                  <SingleProductSale
                    key={item.id}
                    title={item.title}
                    photo={item.photo}
                    rating={item.rating}
                    price={item.price}
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
