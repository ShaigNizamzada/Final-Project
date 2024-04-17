import React from "react";
import { Link, useNavigate } from "react-router-dom";
import slug from "react-slugify";
import WishBtn from "./WishBtn/WishBtn";
import { useCart } from "react-use-cart";
import { MdOutlineShoppingCart } from "react-icons/md";

const SingleProduct = ({ title, photo, rating, price, id, alldata }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
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
          <div className="add--to--cart--section d-flex flex-column align-items-center  justify-content-center">
            <MdOutlineShoppingCart className="fs-4 mb-3"
              onClick={() => {
                localStorage.getItem("login") === "true"
                  ? addItem(alldata)
                  : navigate("/login");
              }}
            />

            <WishBtn product={alldata} />
          </div>
        </div>

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
