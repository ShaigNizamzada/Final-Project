import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please, fill the input");
    } else {
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        localStorage.setItem("login", "true");
        navigate("/products");
        window.location.assign("/");
      } else {
        alert("email or password is wrong");
      }
    }
  };
  return (
    <>
      <div className="login--header--section p-2">
        <h1 className="fw-bold">My Account</h1>
        <Link className="home--button" to="/">
          <span>Home </span>
        </Link>
        <span>/ </span>
        <span>My Account</span>
      </div>
      <div className="d-flex flex-column w-100 justify-content-center align-items-center login--section">
        <div className="col-4">
          <h3 className="mt-5 fw-bold">LOGIN</h3>
          <form className="mt-4" onSubmit={loginSubmit}>
            <div className="mb-2">
              <label>
                Username or email address <span className="text-danger">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control p-2"
              />
            </div>
            <div className="mb-3">
              <label>
                Password <span className="text-danger">*</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control p-2"
              />
            </div>
            <div className="login--button--section">
              <button type="submit" className="button login--button  mx-auto">
                Log In
              </button>
            </div>
            <div className="pt-2 pb-3 d-flex justify-content-between mt-3">
              <Link to="/register" className="have--account">
                <h6>Don't have an account? Register Now!</h6>
              </Link>
              <Link
                to="/forgotpassword"
                className="have--account forgot-password"
              >
                <h6>Forgot Password?</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
