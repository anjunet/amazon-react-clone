import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import "./Cart.css";

const Cart = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  return (
    <div className="cart">
      <div className="cart_container">
        <h1>
          Your Shopping Cart <Link to="/checkout">({basket.length} items)</Link>
        </h1>

        <div className="cart_items">
          {basket.length === 0 ? (
            <div className="cart_empty">
              <h2>Your cart is empty</h2>
              <Link to="/home">
                <button className="cart_continueShopping">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            basket.map((item, index) => (
              <CheckoutProduct
                key={item.id || index} // Fallback to index if item.id is missing
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton          
              />

            ))
          )}
        </div>

        {basket.length > 0 && (
          <div className="cart_summary">
            <h3>Order Summary</h3>
            <p>Total: ${getBasketTotal(basket)}</p>
            <Link to="/checkout">
              <button className="cart_checkoutButton">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
        

      </div>
    </div>
  );
};

export default Cart;
