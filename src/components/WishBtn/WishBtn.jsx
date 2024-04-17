import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";

const WishBtn = ({ product }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const toggleWish = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
    } else {
      addWishlistItem(myProduct);
    }
  };
  return (
    <Link key={product.id} onClick={() => toggleWish(product)}>
      {inWishlist(product.id) ? (
        <i class="fa-solid fa-heart fs-5"></i>
      ) : (
        <i class="fa-regular fa-heart fs-5"></i>
      )}
    </Link>
  );
};

export default WishBtn;
