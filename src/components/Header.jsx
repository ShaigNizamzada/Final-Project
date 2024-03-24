import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";

const Header = () => {
  const [mode, setMode] = useContext(ModeContext);
  return (
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-logo-white.svg"
            alt=""
            className="woodmart--logo"
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
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sale">
                Sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/campaign">
                Campaign
              </NavLink>
            </li>
          </ul>
          <div className="header-end-section ms-auto d-flex">
            <div className="social-media mt-1">
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
                <span className="social-media-icon discord">
                  <i class="fa-brands fa-discord"></i>
                </span>
              </Link>
            </div>
            <form role="search" className="search-section mx-5">
              <input
                className="form-control mt-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div className="header-user-section mt-2 ">
              {localStorage.getItem("login") === "true" ? (
                <div>
                  <NavLink to="/account" className="my-profile">
                    <i class="fa-regular fa-user me-2"></i>
                    {localStorage.getItem("fullname")}
                  </NavLink>
                </div>
              ) : (
                <NavLink className="login" to="/login">
                  <i class="fa-regular fa-user"></i>
                </NavLink>
              )}
              <NavLink className="favorite mx-4" to="/wishlist">
                <i class="fa-regular fa-heart"></i>
              </NavLink>
              <NavLink className="shopping-cart" to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
              <div
                className="mx-4 mode"
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
          </div>
          <button className="btn btn-danger">AZ</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
