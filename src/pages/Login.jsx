import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Login = () => {
  document.title = "Login";
  const { t } = useTranslation();
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminData = {
    fullname: "Admin",
    email: "admin@admin.com",
    password: "123",
    tel: "123",
  }; // ADMIN DATAM. register olmadan burdan deyerleri goturur.

  const loginSubmit = (e) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || []
    );
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("login", true);
      localStorage.setItem("activeUser", JSON.stringify(user));
      window.location.assign("/");
    } else if (adminData.email === email && adminData.password === password) {
      localStorage.setItem("activeUser", JSON.stringify(adminData));
      localStorage.setItem("login", true);
      window.location.assign("/");
    } else if (!email || !password) {
      swal({
        title: "",
        text: `${t("swal.5")}`,
        icon: "error",
        timer: 1500,
      });
    } else {
      swal({
        title: "",
        text: `${t("swal.8")}`,
        icon: "error",
        timer: 1500,
      });
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
