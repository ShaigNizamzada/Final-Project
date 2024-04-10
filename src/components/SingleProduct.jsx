import React from "react";
import { Link } from "react-router-dom";
import slug from "react-slugify";
const SingleProduct = ({ title, photo, rating, price, id }) => {
  return (
    <>
      <div className="card--section">
        <Link to={`/sale/${slug(title)}`}>
          <div className="card me-2">
            <img
              src={photo}
              style={{ objectFit: "contain" }}
              className="card-img-top"
              alt="tech"
            />
            <span className="hot">HOT</span>
            <div className="add--to--cart--section d-flex flex-column">
              <Link to={`/sale/${slug(title)}`}>
                <i class="fa-solid fa-magnifying-glass fs-5 pb-4 text-light"></i>
              </Link>
              <Link to="/sale">
                <i class="fa-regular fa-heart fs-5 text-light"></i>
              </Link>
            </div>
          </div>
        </Link>
        <div className="card-bottom">
          <div className="card--bottom--title d-flex justify-content-between me-3 mt-2">
            <Link className="product--title" to={`/sale/${slug(title)}`}>
              <span>{title.slice(0, 20)}</span>
            </Link>
            <div className="rating--section">
              <span>{rating}</span>
              <i class="fa-solid fa-star ms-1"></i>
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
