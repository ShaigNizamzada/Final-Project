import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotebookAdv = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="notebookAdv container-fluid my-4">
        <div className="notebookAdv--body">
          <div className="notebookAdv--text--section">
            <p className="notebookAdv--text text-light fw-bold fs-2">
              {t("home.11")}
            </p>
            <p className="text-light fs-4">{t("home.12")}</p>
            <p className="text-light fs-4">{t("home.13")}</p>
            <div className="button--section d-flex">
              <button className="btn btn-light">
                <Link
                  to="https://rog.asus.com/"
                  target="_blank"
                  className="link text-dark"
                >
                  {t("home.14")}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotebookAdv;
