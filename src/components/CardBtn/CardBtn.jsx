import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import swal from "sweetalert";

const CardBtn = ({ product }) => {
  const { addItem, removeItem, inCart } = useCart();
  const toggleWish = (myProduct) => {
    if (inCart(myProduct.id)) {
      removeItem(myProduct.id);
      swal("", "Product Removed", "success");
    } else {
      addItem(myProduct);
      swal("", "Product Added", "success");
    }
  };
  return (
    <Link key={product.id} onClick={() => toggleWish(product)}>
      {inCart(product.id) ? (
        <>
          <i class="bi bi-bag-check-fill fs-4"></i>
        </>
      ) : (
        <>
          <i class="bi bi-bag-check fs-4"></i>
        </>
      )}
    </Link>
  );
};

export default CardBtn;
