import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Register = () => {
  const { t } = useTranslation();
  document.title = "Register";
  const [user, setUser] = useState({
    fullname: "",
    tel: "",
    email: "",
    password: "",
    againPassword: "",
  }); // inputdaki valuelari elde edirem.
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [showPassword, setshowPassword] = useState(false);
  const [showAgainPassword, setAgainshowPassword] = useState(false);
  const registerSubmit = (e) => {
    e.preventDefault();
    if (
      !user.fullname ||
      !user.tel ||
      !user.email ||
      !user.password ||
      !user.againPassword
    ) {
      swal({
        title: "",
        text: `${t("swal.5")}`,
        icon: "error",
        timer: 1500,
      });
    } else {
      if (user.password === user.againPassword) {
        const registeredUsers =
          JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const existingUser = registeredUsers.find(
          (u) => u.email === user.email
        );
        if (existingUser) {
          swal({
            title: "",
            text: `${t("swal.14")}`,
            icon: "error",
            timer: 1500,
          });
        } else {
          registeredUsers.push(user);
          localStorage.setItem(
            "registeredUsers",
            JSON.stringify(registeredUsers)
          );
          setTimeout(() => {
            window.location.assign("/login");
          }, 2000);
          swal({
            title: "",
            text: `${t("swal.10")}`,
            icon: "success",
            timer: 1500,
          });
        }
      } else {
        swal({
          title: "",
          text: `${t("swal.11")}`,
          icon: "error",
          timer: 1500,
        });
      }
    }
  };
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center register--section">
      <div
        className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-8 register--section--body"
        onSubmit={registerSubmit}
      >
        <h3 className="my-4 fw-bold">{t("register.0")}</h3>
        <form className="mt-4">
          <div className="mb-4">
            <label>
              {t("register.1")} <span className="text-danger">*</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              name="fullname"
            />
          </div>
          <div className="mb-4">
            <label>
              {t("register.2")} <span className="text-danger">*</span>
            </label>
            <input
              onChange={handleChange}
              type="tel"
              className="form-control"
              name="tel"
            />
          </div>
          <div className="mb-4">
            <label>
              {t("register.3")} <span className="text-danger">*</span>
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label>
              {t("register.4")} <span className="text-danger">*</span>
            </label>
            <div className="password--section">
              <div className="password--input--section">
                <input
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="form-control p-2"
                  name="password"
                />
                <div
                  className="show--password--icon"
                  onClick={() => setshowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label>
              {t("register.5")}
              <span className="text-danger">*</span>
            </label>
            <div className="password--section">
              <div className="password--input--section">
                <input
                  onChange={handleChange}
                  type={showAgainPassword ? "text" : "password"}
                  className="form-control p-2"
                  name="againPassword"
                />
                <div
                  className="show--password--icon"
                  onClick={() => setAgainshowPassword(!showAgainPassword)}
                >
                  {showAgainPassword ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 pb-3">
            <Link to="/login" className="have--account">
              <h6>{t("register.6")}</h6>
            </Link>
          </div>
          <div className="register--button--section">
            <button type="submit" className="button register--button px-4 mt-3">
              {t("register.7")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
