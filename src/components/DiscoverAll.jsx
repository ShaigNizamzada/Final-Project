import React, { useContext } from "react";
import SingleProduct2 from "./SingleProduct2";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const DiscoverAll = () => {
  const [product] = useContext(ProductContext);
  return (
    <div className="container-fluid discover--all--section mt-5 px-4">
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="discover--all-first mt-3">
            <div className="top-side d-flex justify-content-between  align-items-center">
              <h4>New Releases</h4>
              <Link to="/sale">
                <button className="button">Discover All</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(0, 5).map((item) => (
                <SingleProduct2
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
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          {" "}
          <div className="discover--all-second mt-3">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>Upcoming</h4>
              <Link to="/sale">
                <button className="button">Discover All</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(30, 35).map((item) => (
                <SingleProduct2
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
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          {" "}
          <div className="discover--all-third mt-3">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>Playstation 5</h4>
              <Link to="/sale">
                <button className="button">Discover All</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(6, 11).map((item) => (
                <SingleProduct2
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
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          {" "}
          <div className="discover--all-fourth mt-3">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>Nintendo Switch</h4>
              <Link to="/sale">
                <button className="button">Discover All</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(21, 26).map((item) => (
                <SingleProduct2
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
  );
};

export default DiscoverAll;
