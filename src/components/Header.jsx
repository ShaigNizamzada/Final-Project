import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";
import slug from "react-slugify";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { useWishlist } from "react-use-wishlist";
import { Select } from "antd";
import i18n from "../i18n/i18next";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleCloseLink = () => {
    setCollapsed(true);
  };
  const toggleLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [mode, setMode] = useContext(ModeContext);
  const [query, setQuery] = useState("");
  const [product] = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://uix.store/intro/motta/images/logo.svg"
            alt=""
            className="woodmart--logo mb-1"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <i class="fa-solid fa-bars hamburger-menu"></i>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleCloseLink}>
                {t("navbar.0")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/sale"
                onClick={handleCloseLink}
              >
                {t("navbar.1")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={handleCloseLink}
              >
                {t("navbar.2")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={handleCloseLink}
              >
                {t("navbar.3")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                onClick={handleCloseLink}
              >
                {t("navbar.4")}
              </NavLink>
            </li>
          </ul>

          <div className="header-end-section ms-auto d-flex align-items-center">
            <div className="social-media">
              <Link to="https://www.instagram.com/" target="_blank">
                <span className="social-media-icon instagram me-2">
                  <i class="fa-brands fa-instagram"></i>
                </span>
              </Link>
              <Link to="https://www.youtube.com/" target="_blank">
                <span className="social-media-icon youtube me-2">
                  <i class="fa-brands fa-youtube"></i>
                </span>
              </Link>
              <Link to="https://www.tiktok.com/" target="_blank">
                <span className="social-media-icon tiktok me-2">
                  <i class="fa-brands fa-tiktok"></i>
                </span>
              </Link>
              <Link to="https://discord.com/" target="_blank">
                <span className="social-media-icon discord me-3">
                  <i class="fa-brands fa-discord"></i>
                </span>
              </Link>
            </div>

            <div className="search--section">
              <div className="search--icon--section pe-2">
                <form className="search-bar">
                  <div
                    onClick={handleShow}
                    className="d-flex justify-content-between align-items-center search--bar--section"
                  >
                    <input type="text" placeholder={t("navbar.5")} />
                    <button className="search--button">
                      {" "}
                      <i class="fa-solid fa-magnifying-glass search--product text-light"></i>
                    </button>
                  </div>
                </form>
              </div>

              <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{t("navbar.6")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="input-group mb-3">
                    <input
                      onChange={(e) => setQuery(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder={t("navbar.7")}
                    />
                    <button className="button" type="button" id="button-addon2">
                      {t("navbar.8")}
                    </button>
                  </div>
                  <ListGroup>
                    {!query
                      ? ""
                      : product
                          .filter((p) =>
                            p.title.toLocaleLowerCase().includes(query)
                          )
                          .map((item) => (
                            <Link
                              to={`/sale/${slug(item.title)}`}
                              onClick={() => handleClose()}
                            >
                              <ListGroup.Item>
                                {" "}
                                <img
                                  src={item.photo}
                                  width={100}
                                  alt="product"
                                  className="me-2"
                                />{" "}
                                <span className="item--list--name fs-4 fw-bold ms-2">
                                  {item.title}
                                </span>
                              </ListGroup.Item>
                            </Link>
                          ))}
                  </ListGroup>
                </Modal.Body>
              </Modal>
            </div>

            <div className="header-user-section">
              {localStorage.getItem("login") === "true" ? (
                <div>
                  <NavLink to="/account" className="my-profile">
                    <i class="fa-regular fa-user me-2"></i>
                    {localStorage.getItem("fullname")}
                  </NavLink>
                </div>
              ) : (
                <NavLink className="login mx-1" to="/login">
                  <i class="fa-regular fa-user"></i>
                </NavLink>
              )}
              <NavLink
                className="favorite mx-3 position-relative"
                to={
                  localStorage.getItem("login") === "true"
                    ? "/wishlist"
                    : "/login"
                }
              >
                <i class="fa-regular fa-heart fs-5"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger wishlist--icon">
                  {localStorage.getItem("login") === "true"
                    ? totalWishlistItems
                    : 0}
                </span>
              </NavLink>
              <Link
                to={
                  localStorage.getItem("login") === "true" ? "/cart" : "/login"
                }
                type="button"
                className="btn position-relative shopping-cart p-0 mx-2"
              >
                <i class="bi bi-cart3 fs-5"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {localStorage.getItem("login") === "true" ? totalItems : 0}
                </span>
              </Link>
              <div
                className="ms-3 me-3 mode"
                onClick={() => {
                  mode === "light" ? setMode("dark") : setMode("light");
                  mode === "light"
                    ? localStorage.setItem("mode", "dark")
                    : localStorage.setItem("mode", "light");
                }}
              >
                {mode === "light" ? (
                  <i class="fa-solid fa-moon mode--change"></i>
                ) : (
                  <i class="fa-regular fa-moon mode--change"></i>
                )}
              </div>
            </div>
            <Select
              defaultValue="en"
              style={{
                width: 60,
              }}
              onChange={toggleLang}
              options={[
                {
                  value: "en",
                  label: "En",
                },
                {
                  value: "az",
                  label: "Az",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
