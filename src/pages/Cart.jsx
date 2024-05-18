import React, { useContext, useEffect } from "react";
import slug from "react-slugify";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "../components/SingleProductSale";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Cart = () => {
  document.title = "Cart";
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  const [product] = useContext(ProductContext);
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal,
    emptyCart,
  } = useCart();
  return isEmpty ? (
    <>
      <h1 className="text-center mt-5">{t("cart.0")}</h1>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          width={400}
          src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg"
          alt=""
          className="cart--is--empty"
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/sale" className="button">
          {t("cart.1")}
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="container-fluid cart--section">
        <div className="cart--top--section">
          <div className="link--to--pages--section d-flex p-4 align-items-center gap-2 fs-5">
            <Link to="/cart" className="link text-decoration-underline">
              {t("cart.2")}
            </Link>
            <i class="fa-solid fa-arrow-right mx-2"></i>
            <Link to="/checkout" className="link link--checkout">
              {t("cart.3")}
            </Link>
            <i class="fa-solid fa-arrow-right mx-2"></i>
            <span>{t("cart.4")}</span>
          </div>
        </div>
        <h2 className="text-center mt-4 mb-5">{t("cart.5")}</h2>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="cart--left--section" data-aos="fade-right">
              <table className="table--shopping--list">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col"></th>
                    <th scope="col">{t("cart.6")}</th>
                    <th scope="col">{t("cart.7")}</th>
                    <th scope="col">{t("cart.8")}</th>
                    <th scope="col">{t("cart.9")}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, c) => (
                    <tr key={c}>
                      <td>
                        <div className="item-remove me-3">
                          <i
                            onClick={() => {
                              removeItem(item.id);
                              swal({
                                title: "",
                                text: `${t("swal.1")}`,
                                icon: "success",
                                timer: 1500,
                              });
                            }}
                            class="fa-solid fa-xmark d-flex justify-content-center"
                          ></i>
                        </div>
                      </td>
                      <td>
                        <div className="item-photo mb-4">
                          <img
                            className=""
                            width={100}
                            src={item.photo}
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="item-title">
                          <Link
                            className="product--title"
                            to={`/sale/${slug(item.title)}`}
                          >
                            {item.title}{" "}
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="item-price discounted--price">
                          £{item.price}
                        </div>
                      </td>
                      <td>
                        <div className="quantity">
                          <input
                            type="button"
                            className="minus"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                            value="-"
                          />
                          <input
                            type="text"
                            className="item--quantity"
                            value={item.quantity}
                          />
                          <input
                            type="button"
                            className="plus"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                            value="+"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="item-subtotal product--price">
                          £ {Math.round(item.price * item.quantity)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => {
                  emptyCart();
                  swal({
                    title: "",
                    text: `${t("swal.2")}`,
                    icon: "success",
                    timer: 1500,
                  });
                }}
                className="button my-4"
              >
                {t("cart.10")}
              </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="cart--right--section p-4" data-aos="fade-left">
              <h3 className="fw-bold">{t("cart.11")}</h3>
              <div className="subtotal--section d-flex pt-3 justify-content-between align-items-center">
                <h6>{t("cart.12")}</h6>
                <p className="discounted--price"> £ {Math.round(cartTotal)}</p>
              </div>
              <hr />
              <div className="shipping--section d-flex pt-3 justify-content-between align-items-center">
                <h6>{t("cart.13")}</h6>
                <p>{t("cart.14")}</p>
              </div>
              <hr />
              <div className="total--section d-flex pt-3 justify-content-between align-items-center">
                <h6>{t("cart.15")}</h6>
                <p className="product--price fs-4 fw-bold">
                  £ {Math.round(cartTotal)}
                </p>
              </div>
              <div className="proceed--to--checkout--section">
                <Link to="/checkout">
                  <button className="button mt-2 align-items-center justify-content-center">
                    {t("cart.16")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h2 className="fw-bold">{t("cart.17")}</h2>
        <div className="col-lg-7 ms-2 pb-5">
          <div className="row" data-aos="fade-up">
            {product.slice(10, 14).map((item) => (
              <SingleProductSale
                key={item.id}
                title={item.title.slice(0, 13)}
                photo={item.photo}
                rating={item.rating}
                price={item.price}
                alldata={item}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
