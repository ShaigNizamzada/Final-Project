import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Description = () => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState("false");
  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <div
        class={`description--section ${
          showContent ? "visible" : "hidden"
        } mt-5 ms-3`}
      >
        <h5 className="fw-bolder mb-4">{t("description.0")}</h5>
        <p>{t("description.1")}</p>
        <h5 className="fw-bolder mb-4">{t("description.2")}</h5>
        <p>{t("description.3")}</p>
        <p>{t("description.4")}</p>
        <p>{t("description.5")}</p>
      </div>
      <Link onClick={toggleContent} className="read--more--button ms-3">
        {showContent ? (
          <p className="ms-3">{t("description.6")}</p>
        ) : (
          <p className="ms-3">{t("description.6")}...</p>
        )}
      </Link>
    </>
  );
};

export default Description;
