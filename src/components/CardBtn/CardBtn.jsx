import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const CardBtn = ({ product }) => {
  const { addItem, removeItem, inCart } = useCart();
  const toggleWish = (myProduct) => {
    if (inCart(myProduct.id)) {
      removeItem(myProduct.id);
    } else {
      addItem(myProduct);
    }
  };

  return (
    <Link key={product.id} onClick={() => toggleWish(product)}>
      {inCart(product.id) ? (
        <i class="bi bi-bag-check-fill fs-4"></i>
      ) : (
        <i class="bi bi-bag-check fs-4"></i>
      )}
    </Link>
  );
};

export default CardBtn;
