import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
const SingleProductSale = ({ title, photo, rating, price }) => {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 single--product--sale">
        <div className="card me-3">
          <img
            src={photo}
            style={{ objectFit: "contain" }}
            className="card-img-top"
            alt="tech"
          />

          <span className="hot">HOT</span>
        </div>
        <div className="card-bottom">
          <div className="card--bottom--title d-flex justify-content-between me-3 mt-2">
            <Link className="product--title" to="/sale">
              <span>{title.slice(0, 20)}</span>
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
