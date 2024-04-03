import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="d-flex footer-top-section justify-content-between py-4 px-2">
          <div className="left-section">
            Payment Methods:{" "}
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/guaranteed-safe-checkout-filled-300x20.png"
              alt=""
            />
          </div>
          <div className="right-section">Payment Currency</div>
        </div>

        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top py-5">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <Link>
              <img
                src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-logo-white.svg"
                alt=""
                className="mb-3 woodmart--logo"
                width={230}
              />
            </Link>
            <p className="mt-5 col-lg-11 fs-6">
              The online store of equipment and electronics is one of the
              leading online stores. The band was released in 25 volumes.
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <h4 className="mt-2 ps-3 ">Useful Links</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span>About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sale" className="nav-link">
                  Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <h4 className="mt-2 ps-3">Games</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/sale" className="nav-link">
                  PC
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sale" className="nav-link">
                  Playstation 5
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sale" className="nav-link">
                  Xbox Series X|S
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sale" className="nav-link">
                  Nintendo Switch
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <h4 className="mt-2 ps-3">Social Links</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  className="nav-link"
                >
                  Instagram
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="https://twitter.com/home"
                  target="_blank"
                  className="nav-link"
                >
                  Twitter
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="https://www.youtube.com/"
                  target="_blank"
                  className="nav-link"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </footer>
        <hr />
        <div className="d-flex footer-bottom-section justify-content-between py-4 px-2">
          <div className="left-section">
            Based on WoodMart theme 2024 WooCommerce Themes.
          </div>
          <div className="right-section d-flex fs-7">
            <Link className="nav-link me-4" to="/faqs">
              Terms of Service
            </Link>
            <Link className="nav-link me-4" to="/privacypolicy">
              Privacy Policy
            </Link>
            <Link className="nav-link" to="/contact">
              Store Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
