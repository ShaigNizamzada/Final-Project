import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./assets/sass/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "swiper/css";
import App from "./App";
import { ModeProvider } from "./context/ModeContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import { addBlog, getBlogsFromDatabase } from "./tools/action/blogAction";
import { Provider } from "react-redux";
import { WishlistProvider } from "react-use-wishlist";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./i18n/i18next";
import configureStore from "./tools/store/ConfigureStore";
import PreLoader from "./components/PreLoader";
// REDUX START
const store = configureStore();

const result = (
  <ProductProvider>
    <ModeProvider>
      <WishlistProvider>
        <CartProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CartProvider>
      </WishlistProvider>
    </ModeProvider>
  </ProductProvider>
);

ReactDOM.render( <PreLoader />, document.getElementById("root"));

store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
