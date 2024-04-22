import React from "react";
import { Link, useNavigate } from "react-router-dom";
import slug from "react-slugify";
import WishBtn from "./WishBtn/WishBtn";
import { useCart } from "react-use-cart";
import CardBtn from "./CardBtn/CardBtn";
import Rating from "./Rating";
const SingleProductSale = ({ title, photo, rating, price, id, alldata }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 single--product--sale g-2">
        <div className="card me-3">
          <img
            src={photo}
            style={{ objectFit: "contain" }}
            className="card-img-top"
            alt="tech"
          />
          <span className="hot">HOT</span>
          <div className="add--to--cart--section d-flex flex-column align-items-center  justify-content-center">
            <CardBtn product={alldata} />
            <WishBtn product={alldata} />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card--bottom--title d-flex justify-content-between me-3 mt-2">
            <Link className="product--title" to={`/sale/${slug(title)}`}>
              <span>{title.slice(0, 18)}...</span>
            </Link>
            <div className="rating--section">
              {/* <span>{rating}</span> */}
              <Rating value={rating} color={"#fcc419"} />
            </div>
          </div>
          <div className="card--bottom--pric mt-1">
            <span className="product--price price">£{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductSale;
