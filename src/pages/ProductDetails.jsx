import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import slug from "react-slugify";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import SingleProductSale from "../components/SingleProductSale";
import "react-toastify/dist/ReactToastify.css";
import WishBtn from "../components/WishBtn/WishBtn";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
import { useWishlist } from "react-use-wishlist";
import { useTranslation } from "react-i18next";
const ProductDetails = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  const [product] = useContext(ProductContext);
  const { addItem } = useCart();
  const { inWishlist } = useWishlist();
  const { url } = useParams();
  const navigate = useNavigate();
  const detailProduct = product.filter(
    (item) => slug(item.title.toString()) === url
  );
  const randomNumber = Math.floor(Math.random() * 35);
  return (
    <>
      {product.length === 0 ? (
        <h1>{t("proDet.0")}</h1>
      ) : (
        <div className="container-fluid product--details">
          <div className="row product--details--section pt-3">
            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="product--details--left--section"
                data-aos="fade-right"
              >
                <img
                  src={detailProduct[0].photo}
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-7 col-sm-12 col-12">
                  <div
                    className="product--details--middle--section ms-1"
                    data-aos="fade-right"
                  >
                    <div className="link--to--pages mb-4">
                      <Link to="/" className="link">
                        {t("proDet.1")}
                      </Link>
                      <span> / </span>
                      <Link to="/sale" className="link">
                        {t("proDet.2")}
                      </Link>
                      <span> / </span>
                      <span className="text-decoration-underline">
                        {detailProduct[0].title}
                      </span>
                    </div>
                    <h1>{detailProduct[0].title}</h1>
                    <div className="rating--section d-flex align-items-center">
                      <i class="fa-solid fa-star me-2"></i>
                      <span className="fs-5">{detailProduct[0].rating}</span>
                      <span className="ms-2">({t("proDet.3")})</span>
                    </div>
                    <p className="my-5">{detailProduct[0].description_short}</p>
                    <div className="release--date--section d-flex justify-content-between gap-5 mt-5">
                      <div className="release--date">
                        <h6>{t("proDet.4")}</h6>
                        {detailProduct[0].release_date}
                      </div>
                      <div className="publisher">
                        <h6>{t("proDet.5")}</h6>
                        {detailProduct[0].publisher}
                      </div>
                      <div className="developer">
                        <h6>{t("proDet.6")}</h6>
                        {detailProduct[0].developer}
                      </div>
                    </div>
                    <hr />
                    <div className="game--properties--section">
                      <div className="row g-3">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="game--properties--section--one">
                            <img
                              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-product-genre-w.svg"
                              alt=""
                              width={30}
                              height={30}
                              className="me-1"
                            />
                            <Link className="link" to="/sale">
                              {detailProduct[0].category}
                            </Link>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="game--properties--section--two">
                            <img
                              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/07/PEGI_12.jpg.webp"
                              alt=""
                              width={30}
                              height={30}
                              className="me-1"
                            />
                            <Link className="link" to="/sale">
                              {t("proDet.7")}
                            </Link>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="game--properties--section--three">
                            <img
                              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-product-languages-w.svg"
                              alt=""
                              width={30}
                              height={30}
                              className="me-1"
                            />
                            <Link className="link" to="/sale">
                              {t("proDet.8")}
                            </Link>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                          <div className="game--properties--section--four">
                            <img
                              src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-product-features-w.svg"
                              alt=""
                              width={30}
                              height={30}
                              className="me-1"
                            />
                            <Link className="link" to="/sale">
                              {t("proDet.9")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                  <div
                    className="product--details--right--section mt-5 pt-4"
                    data-aos="fade-left"
                  >
                    <h4 className="product--price mb-3">
                      £{detailProduct[0].price}
                    </h4>
                    <p className="mt-3">
                      <span className="fs-5 fw-bold"> {t("proDet.10")} </span>{" "}
                      {detailProduct[0].platform}
                    </p>
                    <p>
                      <span className="fs-5 fw-bold"> {t("proDet.11")} </span>{" "}
                      Standart
                    </p>
                    <div className="buy--the--product--section d-flex mt-5">
                      <button
                        className="button btn-lg px-4 me-md-2 mt-5"
                        onClick={() => {
                          if (localStorage.getItem("login") === "true") {
                            addItem(detailProduct[0]);
                            swal({
                              title: "",
                              text: `${t("swal.0")}`,
                              icon: "success",
                              timer: 1500,
                            });
                          } else {
                            navigate("/login");
                          }
                        }}
                      >
                        {t("proDet.12")}
                      </button>
                    </div>
                    <div className="share--section mt-2 d-flex justify-content-between align-items-center">
                      <div className="share--left--section">
                        <WishBtn product={detailProduct[0]} />
                        <span className="fs-5 ms-2">
                          {inWishlist(detailProduct[0].id)
                            ? t("proDet.26")
                            : t("proDet.27")}
                        </span>
                      </div>
                      <div className="share--right--section d-flex justify-content-center align-items-center">
                        <p className="mt-3">{t("proDet.13")}</p>
                        <div className="social--media--icons ms-2">
                          <i class="fa-brands fa-facebook-f me-2"></i>
                          <i class="fa-brands fa-x-twitter me-2"></i>
                          <i class="fa-regular fa-envelope me-2"></i>
                          <i class="fa-brands fa-telegram"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="long--description--section mt-5" data-aos="fade-up">
            <h1>{t("proDet.14")}</h1>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                {" "}
                <p>{detailProduct[0].description_long}</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <iframe
                  height="315"
                  src="https://www.youtube.com/embed/AWFaj4IQ4ro?si=0_-G8G5V-ortnk9E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="specification--section p-3 mt-5">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                data-aos="fade-right"
              >
                <h4>{t("proDet.15")}</h4>
                <div className="overview--title d-flex mt-5 mb-3">
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-specification-overview-d.svg"
                    alt=""
                  />
                  <span className="fw-bold fs-5 ms-2">{t("proDet.16")}</span>
                </div>
                <div className="overview--inner--section d-flex align-items-center justify-content-between">
                  <div className="left-section">
                    <h6>{t("proDet.17")}</h6>
                    <h6>{t("proDet.18")}</h6>
                    <h6>{t("proDet.19")}</h6>
                    <h6>{t("proDet.20")}</h6>
                    <h6>{t("proDet.21")}</h6>
                  </div>
                  <div className="right-section text-end">
                    <p>{detailProduct[0].platform}</p>
                    <p>{detailProduct[0].multiplayer}</p>
                    <p>{detailProduct[0].release_date}</p>
                    <p>{detailProduct[0].publisher}</p>
                    <p>{detailProduct[0].developer}</p>
                  </div>
                </div>
                <hr />
                <div className="language--title d-flex mt-5 mb-3">
                  <img
                    src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-specification-languages-w.svg"
                    alt=""
                  />
                  <span className="fw-bold fs-5 ms-2">{t("proDet.22")}</span>
                </div>
                <div className="language--inner--section d-flex align-items-center justify-content-between">
                  <div className="left-section">
                    <h6>{t("proDet.23")}</h6>
                    <h6>{t("proDet.24")}</h6>
                  </div>
                  <div className="right-section text-end">
                    <p>{detailProduct[0].language}</p>
                    <p>{detailProduct[0].audio}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                data-aos="fade-left"
              >
                <h4 className="px-2 pt-1">{t("proDet.25")}</h4>
                <div className="row mt-5 ms-1">
                  {product.slice(randomNumber, randomNumber + 8).map((item) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
