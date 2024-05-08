import React, { useContext } from "react";
import { Link } from "react-router-dom";
import slug from "react-slugify";
import WishBtn from "./WishBtn/WishBtn";
import { ProductContext } from "../context/ProductContext";
import CardBtn from "./CardBtn/CardBtn";
import Rating from "./Rating";

const SingleProduct = ({ title, photo, rating, price, id, alldata }) => {
  const [product] = useContext(ProductContext);
  return (
    <>
      <div className="card--section">
        <div className="card me-2">
          <img
            src={photo}
            style={{ objectFit: "contain" }}
            className="card-img-top"
            alt="tech"
          />
          <span className="hot">HOT</span>
          <div className="add--to--cart--section d-flex flex-column align-items-center justify-content-center">
            <CardBtn product={alldata} />
            <WishBtn product={alldata} />
          </div>
        </div>

        <div className="card-bottom">
          <div className="card--bottom--title d-flex justify-content-between me-3 mt-2">
            <Link className="product--title" to={`/sale/${slug(title)}`}>
              <span>{title.slice(0, 14)}...</span>
            </Link>
            <div className="rating--section">
              {/* <span>{rating}</span> */}
              <Rating value={rating} color={"#fcc419"} />
            </div>
          </div>
          <div className="card--bottom--price mt-1">
            <span className="product--price price">£{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
