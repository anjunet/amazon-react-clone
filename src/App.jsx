import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useContext, useEffect } from "react";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Cart from "./components/Cart";
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_51R2fd24GksSpBAIdCVVPqgx9RdJLIEDzfry3KlNfJpfp1zNRrNeBcDFlX0cvrGGMUYb50LyPpHv5ir9j96eheayY00M3atrpmr");

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is  ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>

      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route 
            path="/payment" 
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            } 
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
