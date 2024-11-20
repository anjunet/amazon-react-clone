import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
      />
      <div className="search-bar">
        <input className="search-input" type="text" />
      </div>
    </nav>
  );
};

export default Navbar;
