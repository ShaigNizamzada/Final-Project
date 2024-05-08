import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const AccountDetails = () => {
  const { t } = useTranslation();
  const [fullname, setFullname] = useState(localStorage.getItem("fullname"));
  const [tel, setTel] = useState(localStorage.getItem("tel"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const AccountSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !tel || !email) {
      alert("Please fill input");
    } else {
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("tel", tel);
      window.location.reload();
    }
  };
  return (
    <>
      <h2 className="text-center fw-bold my-3">{t("account.4")}</h2>
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        <div className="col-5" onSubmit={AccountSubmit}>
          <form className="mt-4">
            <div className="mb-4">
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                className="form-control p-2"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                type="tel"
                className="form-control p-2"
                placeholder="Tel. Number"
                required
              />
            </div>
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control p-2"
                placeholder="Email Adress"
                required
              />
            </div>
            <div className="login-button-section">
              <button type="submit" className="button login-button px-4 mt-3">
                {t("account.5")}
              </button>
            </div>
            <div className="login-button-section">
              <Link
                to="/changepassword"
                type="submit"
                className="button login-button px-4 mt-3"
              >
                {t("account.6")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
