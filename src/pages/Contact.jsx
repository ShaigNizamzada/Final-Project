import Link from "antd/es/typography/Link";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const Contact = () => {
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
                <h1 className="fw-bold">Contact Us</h1>
                <p>
                  The online store of equipment and electronics is one of the
                  leading online stores.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="name-input mb-3">
                        <input
                          required
                          placeholder="First name"
                          type="text"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="surname-input mb-2">
                        <input
                          required
                          placeholder="Last name"
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
                          placeholder="Email"
                          type="email"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="textarea mt-4">
                    <textarea
                      required
                      placeholder="Your Message"
                      className="text-area"
                      cols="30"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  {/* <input type="email" name="" id="" /> */}
                  <button type="submit" className="button mt-2 mb-5">
                    Send Message
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
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--first--section bottom--section text-center text-light mb-2">
                <h4>Join us on Discord</h4>
                <p>
                  Come to the officialWoodmart deals server and chat with fellow
                  users.
                </p>
                <i class="fa-brands fa-discord text-light fs-5"></i>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--second--section bottom--section text-center text-black mb-2">
                <h4>Follow Us</h4>
                <p>
                  Stay up to date with the best deals! Join us on Facebook,
                  Twitter and Steam.
                </p>
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
              <div className="bottom--third--section bottom--section text-center mb-2 text-black">
                <h4>Vote for features</h4>
                <p>
                  Tell us how to improve Woodmart. Go to our to vote & comment
                  on feature requests.
                </p>
                <img
                  src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2023/05/wd-vgs-logo-black.svg"
                  alt="woodmart logo"
                  width={120}
                  height={28}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="bottom--fourth--section bottom--section d-flex justify-content-center align-items-center flex-column text-center mb-2 text-black">
                <h4>Your feedback</h4>
                <p>
                  Help us create the best version of Woodmart. Go to our &
                  suggest your ideas.
                </p>
                <button className="button">Share Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
