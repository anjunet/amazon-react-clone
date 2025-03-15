import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ShoppingState } from "./context/shopping/ShoppingState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ShoppingState>
          <App />
        </ShoppingState>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();