import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const registerSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !tel || !email || !password || !againPassword) {
      alert("Please fill input");
    } else {
      if (password === againPassword) {
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("email", email);
        localStorage.setItem("tel", tel);
        localStorage.setItem("password", password);
        window.location.assign("/login");
      } else {
        alert("Passwords are different");
      }
    }
  };
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center register--section">
      <div className="col-5" onSubmit={registerSubmit}>
        <h3 className="my-4 fw-bold">SIGNUP</h3>
        <form className="mt-4">
          <div className="mb-4">
            <label>Full Name</label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label>Tel. Number</label>
            <input
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label>Email Adress</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label>Again Password</label>
            <input
              onChange={(e) => setAgainPassword(e.target.value)}
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="pt-2 pb-3">
            <Link to="/login" className="have--account">
              <h6>Already have an account?</h6>
            </Link>
          </div>
          <div className="register--button--section">
            <button type="submit" className="button register--button px-4 mt-3">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
