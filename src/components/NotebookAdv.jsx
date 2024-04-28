import React from "react";
import { Link } from "react-router-dom";

const NotebookAdv = () => {
  return (
    <>
      <div className="notebookAdv container-fluid my-4">
        <div className="notebookAdv--body">
          <img
            src="https://www.gameshub.com/wp-content/uploads/sites/5/2023/07/rog-strix-scar-16-2023-g634.jpg"
            alt=""
          />
          <div className="notebookAdv--text--section p-4">
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
            <div className="button--section d-flex justify-content-end">
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
