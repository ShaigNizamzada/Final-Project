import React, { useContext, useEffect, useState } from "react";
import slug from "react-slugify";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";
import SingleProductSale from "../components/SingleProductSale";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
const Cart = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [couponValue, setCouponValue] = useState(0);
  const [coupon, setCoupon] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    setCoupon(couponValue);
  };
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
      <h1 className="text-center mt-5">Your Cart is empty</h1>
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
          Go to the Products
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="container-fluid cart--section pt-5">
        <h2 className="text-center pb-5">Shopping List</h2>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="cart--left--section" data-aos="fade-right">
              <table className="table--shopping--list">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
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
                              swal("", "Product Removed", "success");
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
              <button onClick={() => emptyCart()} className="button mt-4">
                Remove Cart
              </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="cart--right--section p-4" data-aos="fade-left">
              <h3 className="fw-bold">Cart Totals</h3>
              <div className="subtotal--section d-flex pt-3 justify-content-between align-items-center">
                <h6>Subtotal</h6>
                <p className="discounted--price">
                  {" "}
                  £
                  {coupon === "20"
                    ? Math.round(cartTotal) * 0.8
                    : Math.round(cartTotal)}
                </p>
              </div>
              <hr />
              <div className="shipping--section d-flex pt-3 justify-content-between align-items-center">
                <h6>Shipping</h6>
                <p>Will be updated during checkout.</p>
              </div>
              <hr />
              <div className="total--section d-flex pt-3 justify-content-between align-items-center">
                <h6>Total</h6>
                <p className="product--price fs-4 fw-bold">
                  £
                  {coupon === "20"
                    ? Math.round(cartTotal) * 0.8
                    : Math.round(cartTotal)}
                </p>
              </div>
              <div className="proceed--to--checkout--section">
                <Link to="/checkout">
                  <button className="button mt-2 align-items-center justify-content-center">
                    Proceed To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="coupon--section d-flex align-items-center mt-4 pb-5">
          <form onSubmit={formSubmit} className="d-flex">
            <input
              type="text"
              className="input--coupon"
              placeholder="Coupon code"
              onChange={(e) => setCouponValue(e.target.value)}
            />
            <button type="submit" className="button ms-3">
              Apply Coupon
            </button>
          </form>
        </div>
        <h2 className="fw-bold">They buy with these goods</h2>
        <div className="col-lg-5 ms-2 pb-5">
          <div className="row" data-aos="fade-up">
            {product.slice(10, 14).map((item) => (
              <SingleProductSale
                key={item.id}
                title={item.title}
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
