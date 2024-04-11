import React from "react";
import { Link } from "react-router-dom";
import slug from "react-slugify";
const SingleProductSale = ({ title, photo, rating, price, id, alldata }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 single--product--sale g-2">
        <Link to={`/sale/${slug(title)}`}>
          <div className="card me-3">
            <img
              src={photo}
              style={{ objectFit: "contain" }}
              className="card-img-top"
              alt="tech"
            />
            <span className="hot">HOT</span>
            <div className="add--to--cart--section d-flex flex-column">
              <Link to={`/sale/${slug(title)}`}>
                <i class="fa-solid fa-magnifying-glass fs-5 pb-4 "></i>
              </Link>
              <Link to="/sale">
                <i class="fa-regular fa-heart fs-5"></i>
              </Link>
            </div>
          </div>
        </Link>
        <div className="card-bottom">
          <div className="card--bottom--title d-flex justify-content-between me-3 mt-2">
            <Link className="product--title" to={`/sale/${slug(title)}`}>
              <span>{title.slice(0, 11)}...</span>
            </Link>
            <div className="rating--section">
              <span>{rating}</span>
              <i class="fa-solid fa-star ms-1"></i>
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
