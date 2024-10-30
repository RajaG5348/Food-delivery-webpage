import { Link } from "react-router-dom";
import React from "react";
import "../Css/Login.css";

const Login = () => {
  return (
    <div className="Login-box">
      <div className="container">
        <h3>Welcome Back!</h3>
        <p>Login to continue</p>
        <label htmlFor="text">Username or Email</label>
        <input type="text" required placeholder="Username or Email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          minLength={8}
          maxLength={15}
          placeholder="Enter your password"
        />
        <button type="submit">Log in</button>
        <Link to="/main/fwd" className="link">
          Forgot password
        </Link>
        <Link to="/main/sign-up" className="link">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
