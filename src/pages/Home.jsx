import React, { useContext } from "react";

import Responsive_categories from "../components/Responsive_categories";
import Responsive_TopSellers from "../components/Responsive_TopSellers";
import Responsive_Hero from "../components/Responsive_Hero";
import Responsive4 from "../components/Responsive4";
import Hero from "../components/Hero";
import { ProductContext } from "../context/ProductContext";
import SingleProduct2 from "../components/SingleProduct2";
import StarWars from "../components/StarWars";
import DiscoverAll from "../components/DiscoverAll";

const Home = () => {
  const [product] = useContext(ProductContext);
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12 col-12">
          <Hero />
        </div>
        <div className="col-xl-3 discounted-games mt-4">
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
              />
            ))}
          </div>
        </div>
      </div>
      <Responsive_categories />
      <Responsive_TopSellers />
      <Responsive_Hero />
      <div className="row category--store--games mt-5">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
          <div className="popular--by--category--section ms-3 p-3">
            <h3>Popular By Category</h3>
            <ul>
              <li>Action</li>
              <li>Adventure</li>
              <li>Casual</li>
              <li>Horror</li>
              <li>Indie</li>
              <li>Racing</li>
              <li>RPG</li>
            </ul>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
          <div className="store--section me-3">
            <Responsive4 />
          </div>
        </div>
        <StarWars />
        <DiscoverAll />
      </div>
    </>
  );
};

export default Home;
