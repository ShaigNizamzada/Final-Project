import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container notFound">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <Link to="/">
            <img
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/06/custom-404-error-page.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
