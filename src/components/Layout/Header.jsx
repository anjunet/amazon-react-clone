import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from "../../firebase";

const Header = () => {
  const navigate = useNavigate(); // ✅ Use the useNavigate hook
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleCartClick = () => {
    navigate("/cart"); // ✅ Navigate to cart page
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="header_logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <div onClick={handleCartClick} className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
