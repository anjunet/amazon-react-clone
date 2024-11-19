import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import ProductCard from "./components/Products/Product/ProductCard/ProductCard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Products />
      <Product />
      <ProductCard />
      <Registration />

      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* Individual Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/login" element={<Auth />} />

          {/* Not Found route */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
