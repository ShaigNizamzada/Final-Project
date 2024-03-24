import React, { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldpassword] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const ChangePasswordSubmit = (e) => {
    e.preventDefault();

    if (!password || !againPassword || !oldPassword) {
      alert("please, fill input");
    } else {
      if (oldPassword === localStorage.getItem("password")) {
        if (password === againPassword) {
          localStorage.setItem("password", password);
          window.location.assign("/account");
        } else {
          alert("passwords are different!");
        }
      } else {
        alert("wrong password!");
      }
    }
  };
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="my-4">Change Password</h1>

      <div className="col-5" onSubmit={ChangePasswordSubmit}>
        <form className="mt-4">
          <div className="mb-4">
            <input
              onChange={(e) => setOldpassword(e.target.value)}
              type="password"
              className="form-control p-2"
              placeholder="Current password"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control p-2"
              placeholder="New Password"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setAgainPassword(e.target.value)}
              type="password"
              className="form-control p-2"
              placeholder="New Password Again"
              required
            />
          </div>
          <div className="login-button-section">
            <button type="submit" className="button login-button px-4 mt-3">
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
