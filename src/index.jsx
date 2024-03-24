import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/style.css";
import "swiper/css";
import App from "./App";
import { ModeProvider } from "./context/ModeContext";
import { ProductProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </ProductProvider>
  </React.StrictMode>
);
