import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/sass/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "swiper/css";
import App from "./App";
import { ModeProvider } from "./context/ModeContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./i18n/i18next";

const result = (
  <ProductProvider>
    <ModeProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </ModeProvider>
  </ProductProvider>
);

const root = createRoot(document.getElementById("root"));
root.render(result);
