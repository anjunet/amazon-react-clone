import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="search-bar">
        <input className="search-input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to="/Login">
          <div className="header_option">
            <span className="header_optionOne">Hello Guest</span>
            <span className="header_optionTwo">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo"> & Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <div className="basket">
          <ShoppingBasketIcon />
          <span className="header_optionTwo header_basketCount"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
