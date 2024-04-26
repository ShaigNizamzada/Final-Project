import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid footer">
        <div className="d-flex footer-top-section justify-content-between py-4 px-2">
          <div className="left-section">
            {t("footer.0")}
            <img
              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/guaranteed-safe-checkout-filled-300x20.png"
              alt=""
            />
          </div>
          <div className="right-section"> {t("footer.1")}</div>
        </div>

        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top py-5">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <Link className=" ms-3">
              <img
                src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-logo-white.svg"
                alt=""
                className="mb-3 woodmart--logo"
                width={230}
              />
            </Link>
            <p className="mt-5 col-lg-11 fs-6 ms-3">{t("footer.2")}</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <h4 className="mt-2 ps-3 "> {t("footer.3")}</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span> {t("footer.4")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <span> {t("footer.5")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sale" className="nav-link">
                  {t("footer.6")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  {t("footer.7")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link">
                  {t("footer.8")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <h4 className="mt-2 ps-3"> {t("footer.9")}</h4>
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
            <h4 className="mt-2 ps-3"> {t("footer.10")}</h4>
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
          <div className="left-section">{t("footer.11")}</div>
          <div className="right-section d-flex fs-7">
            <Link className="nav-link me-4" to="/faqs">
              {t("footer.12")}
            </Link>
            <Link className="nav-link me-4" to="/privacypolicy">
              {t("footer.13")}
            </Link>
            <Link className="nav-link" to="/contact">
              {t("footer.14")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
