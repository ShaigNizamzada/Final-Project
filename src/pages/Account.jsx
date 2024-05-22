import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Account = () => {
  // let activeUser = localStorage.getItem("activeUser");
  // let activeUserParse = JSON.parse(activeUser);

  document.title = "Account";
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center my-profile">
      <img
        src="https://cdn-icons-png.freepik.com/256/552/552848.png"
        alt=""
        className="profile--icon"
      />
      <h1 className="my-4">{t("account.0")}</h1>
      <div className="d-flex gap-2">
        <Link to="/accountdetails" className="link">
          <button className="button mb-3">{t("account.1")}</button>
        </Link>
        {localStorage.getItem("email") ? (
          <Link to="/dashboard" className="link">
            <button className="button">{t("account.2")}</button>
          </Link>
        ) : (
          ""
        )}
        {/* <Link to="/dashboard">
          <button className="button">Dashboard</button>
        </Link> */}
      </div>
      <div className="logout-section d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-danger my-4 px-5"
          onClick={() => {
            localStorage.removeItem("login");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            window.location.assign("/login");
          }}
        >
          {t("account.3")}
        </button>{" "}
      </div>
    </div>
  );
};

export default Account;
