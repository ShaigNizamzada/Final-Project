import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleProduct from "../components/SingleProduct";

const Wishlist = () => {
  const { items } = useWishlist();
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <SingleProduct
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
  );
};

export default Wishlist;
