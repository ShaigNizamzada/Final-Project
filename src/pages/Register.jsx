import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [showAgainPassword, setAgainshowPassword] = useState(false);
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
      <div
        className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-8 register--section--body"
        onSubmit={registerSubmit}
      >
        <h3 className="my-4 fw-bold">SIGNUP</h3>
        <form className="mt-4">
          <div className="mb-4">
            <label>
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label>
              Tel. Number <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label>
              Email Adress <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              required
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
          <div className="mb-3">
            <label>
              Again Password <span className="text-danger">*</span>
            </label>
            <div className="password--section">
              <div className="password--input--section">
                <input
                  onChange={(e) => setAgainPassword(e.target.value)}
                  type={showAgainPassword ? "text" : "password"}
                  className="form-control p-2"
                />
                <div
                  className="show--password--icon"
                  onClick={() => setAgainshowPassword(!showAgainPassword)}
                >
                  {showAgainPassword ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
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
