import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
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
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="my-4">My Account</h1>
      <Link to="/accountdetails">
        <button className="button mb-3">Details</button>
      </Link>
      <Link to="/dashboard">
        <button className="button">Dashboard</button>
      </Link>
    </div>
  );
};

export default Account;
