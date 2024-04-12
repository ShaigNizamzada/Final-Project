import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleProductSale from "../components/SingleProductSale";

const Wishlist = () => {
  const { items } = useWishlist();
  return (
    <div className="container">
      <h1 className="text-center my-3 fw-bold">My Wishlist</h1>
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
