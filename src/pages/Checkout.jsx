import React, { /* useContext */ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Countries from "../components/CountrySelect";
import { useCart } from "react-use-cart";
// import { ProductContext } from "../context/ProductContext";
import slug from "react-slugify";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
const Checkout = () => {
  const [couponValue, setCouponValue] = useState(0);
  const [coupon, setCoupon] = useState("");
  const formCoupon = (e) => {
    e.preventDefault();
    setCoupon(couponValue);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  //   const [product] = useContext(ProductContext);
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [post, setPost] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if ((!name, !lastName, !phone, !email, !city, !street, !post)) {
      swal({
        title: "",
        text: "Please fill the inputs",
        icon: "error",
        timer: 1500,
      });
    } else {
      swal({
        title: "",
        text: "Your shopping has been successfully done",
        icon: "success",
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className="checkout--section">
        <div className="checkout--top--section">
          <div className="link--to--pages--section d-flex p-4 align-items-center gap-2 fs-5">
            <Link to="/cart" className="link--shoppingcart link">
              Shopping Cart
            </Link>
            <i class="fa-solid fa-arrow-right mx-2"></i>
            <Link to="/checkout" className="link--checkout link">
              Checkout
            </Link>
            <i class="fa-solid fa-arrow-right mx-2"></i>
            <span>Order Complete</span>
          </div>
        </div>
        <div className="checkout--bottom--section mt-3">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="coupon--section d-flex align-items-center mt-4 pb-5"></div>
              <form onSubmit={formSubmit}>
                <div
                  className="checkout--bottom--left--section mx-3"
                  data-aos="fade-right"
                >
                  <h3>
                    <span>1.</span> Billing Details
                  </h3>
                  <div className="input--form">
                    <div className="row my-4">
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          placeholder="First name"
                          type="text"
                          name="name"
                          className="mb-3"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last name"
                          type="text"
                          name="lastname"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          type="tel"
                          name="phone"
                          className="mb-3"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          type="email"
                          name="lastname"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-md-6 col-12">
                        <Countries />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Town / City"
                          type="text"
                          name="lastname"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          onChange={(e) => setStreet(e.target.value)}
                          placeholder="Street address"
                          type="text"
                          name="name"
                          className="mb-3"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <input
                          onChange={(e) => setPost(e.target.value)}
                          placeholder="Post Code"
                          type="text"
                          name="lastname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="textarea mt-4">
                    <textarea
                      placeholder="Notes about your order, e.g. special notes for delivery. (optional)"
                      className="text-area"
                      cols="30"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  <h3 className="mt-5">
                    <span>2.</span> Payment Information
                  </h3>
                  <form className="checkbox--form d-flex flex-column mx-2 my-3">
                    <div className="checkbox--form--one my-4">
                      {" "}
                      <input type="radio" name="radio" id="radio" />
                      <label>&nbsp; Direct Bank Transfer</label>
                    </div>
                    <div className="checkbox--form--two">
                      {" "}
                      <input type="radio" name="radio" id="radio" />
                      <label>&nbsp; Cash on Delivery</label>
                    </div>
                    <hr />
                  </form>
                  <button className="button w-100 my-3" type="submit">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div
                className="checkout--bottom--right--section p-3 mt-5"
                data-aos="fade-left"
              >
                <h5>Your Order</h5>
                <br />
                <div className="d-flex align-items-center justify-content-between p-2">
                  <h6>Product</h6>
                  <h6>Subtotal</h6>
                </div>
                <div className="product--section">
                  <table>
                    <tbody>
                      {items.map((item, c) => (
                        <tr key={c}>
                          <td>
                            <div className="item-remove me-2">
                              <i
                                onClick={() => {
                                  removeItem(item.id);
                                  swal({
                                    title: "",
                                    text: "Product Removed",
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
                            <div className="quantity me-2">
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
                            <div className="item-subtotal product--price d-flex">
                              <span>£&nbsp;</span>
                              <span>
                                {Math.round(item.price * item.quantity)}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr />
                </div>
                <div className="subtotal--section d-flex align-items-center justify-content-between">
                  <h6>SubTotal</h6>
                  <span className="product--price fs-5 fw-bold">
                    £{" "}
                    {coupon === "Hello20"
                      ? Math.round(cartTotal) * 0.8
                      : Math.round(cartTotal)}
                  </span>
                </div>
                <hr />{" "}
                <div className="shipping--section d-flex align-items-center justify-content-between">
                  <h6>Shipping</h6>
                  <div className="shipping--section--options">
                    <form className="checkbox--form d-flex flex-column mx-2 my-3 ">
                      <div className="checkbox--form--one mb-2 d-flex justify-content-between align-items-center">
                        <label className="me-3">&nbsp; Flat rate</label>
                        <input type="radio" name="radio" id="radio" />
                      </div>
                      <div className="checkbox--form--two mb-2 d-flex justify-content-between align-items-center">
                        <label className="me-3">&nbsp; Free shipping</label>
                        <input type="radio" name="radio" id="radio" />
                      </div>
                      <div className="checkbox--form--three d-flex justify-content-between align-items-center">
                        <label className="me-3">&nbsp; Local pickup</label>
                        <input type="radio" name="radio" id="radio" />
                      </div>
                    </form>
                  </div>
                </div>
                <hr />
                <div className="total--section d-flex justify-content-between align-items-center">
                  <h6>Total</h6>
                  <span className="product--price fs-4 fw-bold">
                    £{" "}
                    {coupon === "Hello20"
                      ? Math.round(cartTotal) * 0.8
                      : Math.round(cartTotal)}
                  </span>
                </div>
                <h6 className="my-3 ms-1">Do you have any coupon?</h6>
                <form onSubmit={formCoupon} className="d-flex">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
