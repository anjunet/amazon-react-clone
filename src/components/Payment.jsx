import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import ShoppingContext from "../context/shopping/shoppingContext";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { db } from "../firebase";
import { doc, setDoc, collection } from "firebase/firestore";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  // Get the Stripe client secret when basket changes
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios.post(
          `/payments/create?total=${getBasketTotal(basket) * 100}`
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    getClientSecret();
  }, [basket]);

  // Handle the payment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        // Store payment in Firestore
        await setDoc(
          doc(collection(db, "users", user?.uid, "orders"), paymentIntent.id),
          {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          }
        );

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        emptyBasket();

        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>62 Darwin road</p>
            <p>Sandton, SA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={item.id || index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disabled || succeeded}
                  type="submit"
                  className="payment_button"
                >
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
