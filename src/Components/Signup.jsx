import React from "react";
import { Link } from "react-router-dom";
import "../Css/Signup.css";

function Signup() {
  return (
    <div className="signup-box">
      <div className="container">
        <h2>Create account</h2>
        <div className="signup-links">
          <Link to="/main/sign-up">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link to="/main/sign-up">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="/main/sign-up">
            <i className="bi bi-google"></i>
          </Link>
          <Link to="/main/sign-up">
            <i className="bi bi-apple"></i>
          </Link>
        </div>
        <p> or use your email for registration :</p>
        <div className="input-box">
          <i className="bi bi-person"></i>
          <input type="text" placeholder="Enter Your Name" required />
        </div>
        <div className="input-box">
          <i className="bi bi-envelope"></i>
          <input type="email" placeholder="Enter Your Email" required />
        </div>
        <div className="input-box">
          <i className="bi bi-key"></i>
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <div className="input-box">
          <i className="bi bi-key"></i>
          <input
            type="password"
            placeholder="Enter Your confirm Password"
            required
          />
        </div>
        <button>Sign up</button>
        <div className="login__page">
          <Link to="/main/log-in">
            Already a member? <span>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
