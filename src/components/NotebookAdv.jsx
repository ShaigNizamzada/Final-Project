import React from "react";
import { Link } from "react-router-dom";

const NotebookAdv = () => {
  return (
    <>
      <div className="notebookAdv container-fluid my-4">
        <div className="notebookAdv--body">
          <div className="notebookAdv--text--section">
            <p className="notebookAdv--text text-light fw-bold fs-2">
              Looking For a Gaming Laptop?
            </p>
            <p className="text-light fs-4">
              ROG makes the best hardware for PC gaming, eSports, and
              overclocking
            </p>
            <p className="text-light fs-4">
              Our innovations deliver top performance and premium experiences
              for everyone.
            </p>
            <div className="button--section d-flex">
              <button className="btn btn-light">
                <Link
                  to="https://rog.asus.com/"
                  target="_blank"
                  className="link text-dark"
                >
                  Discover Now!
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
