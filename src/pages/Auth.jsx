import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login_logo"
          src="	https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/180px-Amazon_2024.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input type="text" placeholder="Enter Email" />
          <h5>Password</h5>
          <input type="password" placeholder="Enter Password" />
          <button type="submit" className="login_signInButton">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="register_button">Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Auth;
