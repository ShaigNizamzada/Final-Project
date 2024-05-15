import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Login = () => {
  const { t } = useTranslation();
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const adminData = {
  //   adminFullname: "Admin",
  //   adminEmail: "admin@admin.com",
  //   adminPassword: "123",
  //   adminTel: "123",
  // };
  // localStorage.setItem("fullname", adminData.adminFullname);
  // localStorage.setItem("email", adminData.adminEmail);
  // localStorage.setItem("tel", adminData.adminTel);
  // localStorage.setItem("password", adminData.adminPassword);
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      swal({
        title: "",
        text: "Please fill the inputs",
        icon: "error",
        timer: 1500,
      });
    } else {
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        localStorage.setItem("login", "true");
        swal({
          title: "",
          text: "You have successfully been logged in",
          icon: "success",
          timer: 1500,
        });
        setTimeout(() => {
          window.location.assign("/");
        }, 2000);
      } else {
        swal({
          title: "",
          text: "Email or password is wrong",
          icon: "error",
          timer: 1500,
        });
      }
    }
  };
  return (
    <>
      <div className="login--header--section p-2">
        <h1 className="fw-bold">{t("login.0")}</h1>
        <Link className="home--button" to="/">
          <span>{t("login.1")}</span>
        </Link>
        <span> / </span>
        <span>{t("login.0")}</span>
      </div>
      <div className="d-flex flex-column w-100 justify-content-center align-items-center login--section">
        <div className="col-lg-5 col-md-6 col-sm-8 col-8">
          <h3 className="mt-5 fw-bold">{t("login.2")}</h3>
          <form className="mt-4" onSubmit={loginSubmit}>
            <div className="mb-2">
              <label>
                {t("login.3")}
                <span className="text-danger">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control p-2"
              />
            </div>
            <div className="mb-3">
              <label>
                {t("login.4")}
                <span className="text-danger">*</span>
              </label>
              <div className="password--section">
                <div className="password--input--section">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    className="form-control p-2"
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
            <div className="login--button--section">
              <button type="submit" className="button login--button  mx-auto">
                {t("login.5")}
              </button>
            </div>
            <div className="pt-2 pb-3 d-flex justify-content-between mt-3">
              <Link to="/register" className="have--account">
                <h6>{t("login.6")}</h6>
              </Link>
              <Link
                to="/forgotpassword"
                className="have--account forgot-password"
              >
                <h6>{t("login.7")}</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
