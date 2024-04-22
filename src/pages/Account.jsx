import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <img
        src="https://cdn-icons-png.freepik.com/256/552/552848.png"
        alt=""
        className="profile--icon"
      />
      <h1 className="my-4">My Account</h1>
      <div className="d-flex gap-2">
        <Link to="/accountdetails">
          <button className="button mb-3">Details</button>
        </Link>
        <Link to="/dashboard">
          <button className="button">Dashboard</button>
        </Link>
      </div>
      <div className="logout-section d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-danger my-4 px-5"
          onClick={() => {
            localStorage.removeItem("login");
            window.location.assign("/login");
          }}
        >
          Logout
        </button>{" "}
      </div>
    </div>
  );
};

export default Account;
