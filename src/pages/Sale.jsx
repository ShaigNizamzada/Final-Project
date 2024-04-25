import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "../components/SingleProductSale";
import { Slider } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Sale = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  const [product] = useContext(ProductContext);
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 100,
  });
  const handleRange = (event) => {
    setPrice({
      ...price,
      minPrice: event[0],
      maxPrice: event[1],
    });
  };

  const filteredPrice = product.filter(
    (item) => item.price >= price.minPrice && item.price <= price.maxPrice
  );
  const filteredProduct = filteredPrice.filter(
    (item) => item.category === category
  );
  return (
    <>
      <div className="sale--section">
        <div className="sale--section--top p-3">
          <Link className="sale--button" to="/">
            <span>{t("sale.0")}</span>
          </Link>
          <span> / </span>
          <span>{t("sale.1")}</span>
        </div>
        <div className="sale--section--middle" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="text--section">
                <p>{t("sale.2")}</p>
                <h1 className="text-light">{t("sale.3")}</h1>
                <p>
                {t("sale.4")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sale--section--bottom mt-5">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 ">
              <div
                className="sale--section--bottom--left mt-4 p-4"
                data-aos="fade-right"
              >
                <div className="price-slider">
                  <h4>{t("sale.5")}</h4>
                  <div className="d-flex justify-content-between">
                    <span>£ {price.minPrice}</span>
                    <span>£ {price.maxPrice}</span>
                  </div>
                  <Slider
                    range
                    max={100}
                    step={15}
                    defaultValue={[0, 100]}
                    onChange={handleRange}
                  />
                  <p>
                  {t("sale.5")}: <span className="fw-bold">£0 — £100</span>{" "}
                  </p>
                </div>
                {/* {product.filter(
                  (item) =>
                    item.price >= price.minPrice && item.price <= price.maxPrice
                )} */}
                <hr className="mx-3" />
                <h4>{t("sale.6")}</h4>
                <ul className="d-flex flex-column flex-wrap gap-2">
                  <li className="fs-4" onClick={() => setCategory("")}>
                  {t("sale.7")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Action")}>
                  {t("sale.8")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Adventure")}>
                  {t("sale.9")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Casual")}>
                  {t("sale.10")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Horror")}>
                  {t("sale.11")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Indie")}>
                  {t("sale.12")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("Racing")}>
                  {t("sale.13")}
                  </li>
                  <li className="fs-4" onClick={() => setCategory("RPG")}>
                  {t("sale.14")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
              <div
                className="row sale--section--right--left ms-1 mt-4"
                data-aos="fade-left"
              >
                {/* <SingleProductSaleList /> */}

                {!category
                  ? filteredPrice.map((item) => (
                      <SingleProductSale
                        key={item.id}
                        title={item.title}
                        photo={item.photo}
                        rating={item.rating}
                        price={item.price}
                        alldata={item}
                      />
                    ))
                  : filteredProduct.map((item) => (
                      <SingleProductSale
                        key={item.id}
                        title={item.title}
                        photo={item.photo}
                        rating={item.rating}
                        price={item.price}
                        alldata={item}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
