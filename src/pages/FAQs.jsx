import React from "react";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  document.title = "FAQs";
  const { t } = useTranslation();
  return (
    <>
      <div className="faqs--section">
        <div className="faqs--header--section p-3">
          <h3>{t("faqs.0")}</h3>
          <br />
          <h3>{t("faqs.1")}</h3>
          <p>{t("faqs.2")}</p>
          <p>{t("faqs.3")}</p>
        </div>
        <div className="faqs--bottom--section p-3">
          <h4>{t("faqs.4")}</h4>
          <p>{t("faqs.5")}</p>
          <h4>{t("faqs.6")}</h4>
          <p>{t("faqs.7")}</p>
          <h4>{t("faqs.8")}</h4>
          <p>{t("faqs.9")}</p>
          <h4>{t("faqs.10")}</h4>
          <p>{t("faqs.11")}</p>
          <h4>{t("faqs.12")}</h4>
          <p>{t("faqs.13")}</p>
          <h4>{t("faqs.14")}</h4>
          <p>{t("faqs.15")}</p>
        </div>
      </div>
    </>
  );
};

export default FAQs;
