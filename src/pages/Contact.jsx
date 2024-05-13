import Link from "antd/es/typography/Link";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_o9gwr1g", "template_31c99er", form.current, {
        publicKey: "l196bMncVHDktiWLl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          swal({
            title: "",
            text: "Your Message has been sent",
            icon: "success",
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="container-fluid mt-2 contact--section">
        <div className="contact--section--top">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="contact--section--top--left ms-2"
                data-aos="fade-right"
              >
                <h1 className="fw-bold">{t("contact.0")}</h1>
                <p>{t("contact.1")}</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="name-input mb-3">
                        <input
                          required
                          placeholder={t("contact.2")}
                          type="text"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="surname-input mb-2">
                        <input
                          required
                          placeholder={t("contact.3")}
                          type="text"
                          name="surname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                      <div className="email-input">
                        <input
                          required
                          placeholder={t("contact.4")}
                          type="email"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="textarea mt-4">
                    <textarea
                      required
                      placeholder={t("contact.5")}
                      className="text-area"
                      cols="30"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  {/* <input type="email" name="" id="" /> */}
                  <button type="submit" className="button mt-2 mb-5">
                    {t("contact.6")}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="contact--section--top--right mt-5"
                data-aos="fade-left"
              >
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/06/wd-vgs-contact-us.png"
                  alt="headphone"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact--section--bottom mt-5" data-aos="fade-down">
          <div className="row g-3">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--first--section bottom--section text-center text-light">
                <h4>{t("contact.7")}</h4>
                <p>{t("contact.8")}</p>
                <i class="fa-brands fa-discord text-light fs-5"></i>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--second--section bottom--section text-center text-black ">
                <h4>{t("contact.9")}</h4>
                <p>{t("contact.10")}</p>
                <div className="social--media d-flex align-items-center justify-content-center text-black">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <i class="fa-brands fa-facebook-f fs-5 text-black p-1"></i>
                  </Link>
                  <Link href="https://twitter.com/home" target="_blank">
                    <i class="fa-brands fa-x-twitter fs-5 text-black p-1"></i>
                  </Link>
                  <Link href="mailto:shaiqnizamzade@gmail.com" target="_blank">
                    <i class="fa-solid fa-envelope fs-5 text-black p-1"></i>
                  </Link>
                  <Link href="https://web.telegram.org/a/" target="_blank">
                    <i class="fa-brands fa-telegram fs-5 text-black p-1"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--third--section bottom--section text-center text-black">
                <h4>{t("contact.11")}</h4>
                <p>{t("contact.12")}</p>
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-logo-black.svg"
                  alt="woodmart logo"
                  width={120}
                  height={28}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--fourth--section bottom--section text-center  text-black">
                <h4>{t("contact.13")}</h4>
                <p>{t("contact.14")}</p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <button className="button ">{t("contact.15")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location--section my-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                className="location--left--section p-5"
                data-aos="fade-right"
              >
                <h3 className="fw-bold">{t("contact.16")}</h3>
                <p className="fs-4">{t("contact.17")}</p>
                <h3 className="fw-bold">{t("contact.18")}</h3>
                <p className="fs-4">+994551234567</p>
                <h3 className="fw-bold">{t("contact.19")}</h3>
                <p className="fs-4">woodmart@gmail.com</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="location--right--section" data-aos="fade-left">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.5648682158744!2d49.84137860785438!3d40.3766701248358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5b946a205%3A0x5caf7c58eaeba592!2sAleksandrit%20Lazer-%20Keratin%20Studio!5e0!3m2!1str!2saz!4v1714338626846!5m2!1str!2saz"
                  title="Location map"
                  width={700}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
