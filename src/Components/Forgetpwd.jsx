import React from "react";
import { Link } from "react-router-dom";
import "../Css/Forgetpwd.css"

function Forgetpwd() {
  return (
    <div className="pwd-box">
      <div className="container">
        <h2>Forgot Password ?</h2>
        <p>No worries, we'll send you reset instructions</p>
        <label htmlFor="email">Email</label>
        <input type="email" required placeholder="Enter your Email" />
        <button type="button">Reset password</button>
        <div className="login__page">
          <i className="bi bi-box-arrow-in-left"></i>
          <Link to="/main/log-in" className="fga">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgetpwd;
