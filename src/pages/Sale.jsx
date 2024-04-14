import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SingleProductSaleList from "../components/SingleProductSaleList";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "../components/SingleProductSale";
const Sale = () => {
  const [product] = useContext(ProductContext);
  const [category, setCategory] = useState("");
  const filteredProduct = product.filter((item) => item.category === category);
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
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
              <div className="sale--section--bottom--left mt-3 p-3">
                <h5>Categories</h5>
                <ul className="d-flex flex-column flex-wrap gap-2">
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
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row sale--section--right--left ms-1 mt-3">
                <SingleProductSaleList />
                {filteredProduct.map((item) => (
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
