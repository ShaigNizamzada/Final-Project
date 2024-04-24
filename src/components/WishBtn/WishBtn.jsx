import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import swal from "sweetalert";
const WishBtn = ({ product }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const toggleWish = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      if (localStorage.getItem("login") === "true") {
        swal({
          title: "",
          text: "Product Removed",
          icon: "success",
          timer: 1500,
        });
      }
    } else {
      addWishlistItem(myProduct);
      if (localStorage.getItem("login") === "true") {
        swal({
          title: "",
          text: "Product Added",
          icon: "success",
          timer: 1500,
        });
      }
    }
  };
  return (
    <Link
      key={product.id}
      onClick={() => {
        if (localStorage.getItem("login") === "true") {
          toggleWish(product);
        }
      }}
    >
      {inWishlist(product.id) ? (
        <i class="fa-solid fa-heart fs-5 mt-2"></i>
      ) : (
        <i class="fa-regular fa-heart fs-5 mt-2"></i>
      )}
    </Link>
  );
};

export default WishBtn;
