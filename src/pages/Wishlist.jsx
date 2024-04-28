import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleProductSale from "../components/SingleProductSale";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Wishlist = () => {
  const { t } = useTranslation();
  const { items, isWishlistEmpty } = useWishlist();
  return isWishlistEmpty ? (
    <>
      <h1 className="text-center my-5 fw-bold">{t("wishlist.0")}</h1>
      <div className="d-flex justify-content-center aling-items-center">
        <img
          src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/sale" className="button">
        {t("wishlist.1")}
        </Link>
      </div>
    </>
  ) : (
    <div className="container">
      <h1 className="text-center my-3 fw-bold">{t("wishlist.0")}</h1>
      <div className="row">
        {items.map((item) => {
          return (
            <SingleProductSale
              key={item.id}
              title={item.title}
              photo={item.photo}
              rating={item.rating}
              price={item.price}
              alldata={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
