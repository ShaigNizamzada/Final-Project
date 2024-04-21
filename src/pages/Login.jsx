import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      swal("", "Please fill the inputs", "error");
    } else {
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        localStorage.setItem("login", "true");
        swal("", "You have  successfully been logged in", "success");
        setTimeout(() => {
          window.location.assign("/");
        }, 2000);
      } else {
        swal("", "Email or password is wrong", "error");
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
              <div className="password--section">
                <div className="password--input--section">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    className="form-control p-2"
                  />
                  <div
                    className="show--password--icon"
                    onClick={() => setshowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i class="fa-solid fa-eye"></i>
                    ) : (
                      <i class="fa-regular fa-eye"></i>
                    )}
                  </div>
                </div>
              </div>
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
