import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import swal from "sweetalert";

const CardBtn = ({ product }) => {
  const [t] = useTranslation();
  const { addItem, removeItem, inCart } = useCart();
  const toggleCart = (myProduct) => {
    if (inCart(myProduct.id)) {
      removeItem(myProduct.id);
      if (localStorage.getItem("login") === "true") {
        swal({
          title: "",
          text: `${t("swal.1")}`,
          icon: "success",
          timer: 1500,
        });
      }
    } else {
      addItem(myProduct);
      if (localStorage.getItem("login") === "true") {
        swal({
          title: "",
          text: `${t("swal.0")}`,
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
          toggleCart(product);
        } else {
          window.location.assign("/login");
        }
      }}
    >
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
