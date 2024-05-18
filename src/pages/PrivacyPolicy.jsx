import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  document.title = "Privacy Policy";
  const { t } = useTranslation();
  return (
    <>
      <div className="privacy--policy--section">
        <div className="privacy--policy--top--section d-flex flex-column align-items-center justify-content-center pt-5">
          <img
            src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2021/09/privacy-policy-xtemos-logo.svg"
            alt=""
          />
          <h2 className="my-3 fw-bold">{t("policy.0")}</h2>
          <p className="text-center">
            {t("policy.1")} :&nbsp;
            <Link to="https://woodmart.xtemos.com/" className="link">
              https://woodmart.xtemos.com/
            </Link>{" "}
          </p>
          <p className="text-center py-3">{t("policy.2")}</p>
        </div>
        <div className="privacy--policy--bottom--section mt-5 p-3">
          <h3 className="text-center">{t("policy.3")}</h3>
          <span className="title--number">1.</span>{" "}
          <span className="ms-2 title">{t("policy.4")}</span>{" "}
          <p className="p-3">{t("policy.5")}</p>
          <span className="title--number">2.</span>{" "}
          <span className="ms-2 title">{t("policy.6")}</span>{" "}
          <p className="p-3">{t("policy.7")}</p>
          <span className="title--number">3.</span>{" "}
          <span className="ms-2 title">{t("policy.8")}</span>{" "}
          <p className="p-3">{t("policy.9")}</p>
          <span className="title--number">4.</span>{" "}
          <span className="ms-2 title">{t("policy.10")}</span>{" "}
          <p className="p-3">{t("policy.11")}</p>
          <span className="title--number">5.</span>{" "}
          <span className="ms-2 title">{t("policy.12")}</span>{" "}
          <p className="p-3">{t("policy.13")}</p>
          <span className="title--number">6.</span>{" "}
          <span className="ms-2 title">{t("policy.14")}</span>{" "}
          <p className="p-3">{t("policy.15")}</p>
          <span className="title--number">7.</span>{" "}
          <span className="ms-2 title">{t("policy.16")}</span>{" "}
          <p className="p-3">{t("policy.17")}</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
