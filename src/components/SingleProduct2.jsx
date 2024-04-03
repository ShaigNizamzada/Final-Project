import React from "react";
import { Link } from "react-router-dom";
import slug from "react-slugify";
const SingleProduct2 = ({ title, photo, rating, price, id }) => {
  return (
    <>
      <div className="single--product-2 d-flex p-3">
        <div className="photo--section me-1">
          <img src={photo} alt="" width={55} />
        </div>
        <div className="description--section">
          <Link to={`/sale/${slug(title)}`} className="product--title">
            <h6>{title}</h6>
          </Link>
          <span className="product--rating">{rating}</span>
          <i class="fa-solid fa-star ms-1"></i>
          <br />
          <span className="discounted--price price me-1">
            £{Math.floor(price * 1.2)}
          </span>
          <span className="product--price price">£{price}</span>
        </div>
      </div>
    </>
  );
};

export default SingleProduct2;
