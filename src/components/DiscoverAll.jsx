import React, { useContext, useEffect } from "react";
import SingleProduct2 from "./SingleProduct2";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const DiscoverAll = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  const [product] = useContext(ProductContext);
  const cheapestProducts = product.sort((q, w) => q.price - w.price);
  return (
    <div className="container-fluid discover--all--section mt-5 container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="discover--all-first mt-3" data-aos="flip-left">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>{t("disAll.0")}</h4>
              <Link to="/sale" className="link">
                <button className="button">{t("disAll.1")}</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(10, 15).map((item) => (
                <SingleProduct2
                  key={item.id}
                  title={item.title}
                  photo={item.photo}
                  rating={item.rating}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          {" "}
          <div className="discover--all-second mt-3" data-aos="flip-right">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>{t("disAll.2")}</h4>
              <Link to="/sale" className="link">
                <button className="button">{t("disAll.1")}</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {cheapestProducts.slice(0, 5).map((item) => (
                <SingleProduct2
                  key={item.id}
                  title={item.title}
                  photo={item.photo}
                  rating={item.rating}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          {" "}
          <div className="discover--all-third mt-3" data-aos="flip-left">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>Playstation 5</h4>
              <Link to="/sale" className="link">
                <button className="button">{t("disAll.1")}</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(37, 42).map((item) => (
                <SingleProduct2
                  key={item.id}
                  title={item.title}
                  photo={item.photo}
                  rating={item.rating}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          {" "}
          <div className="discover--all-fourth mt-3" data-aos="flip-right">
            <div className="top-side d-flex justify-content-between align-items-center">
              <h4>Nintendo Switch</h4>
              <Link to="/sale" className="link">
                <button className="button">{t("disAll.1")}</button>
              </Link>
            </div>
            <div className="me-2 mt-3">
              {product.slice(21, 26).map((item) => (
                <SingleProduct2
                  key={item.id}
                  title={item.title}
                  photo={item.photo}
                  rating={item.rating}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverAll;
