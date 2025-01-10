import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard/ProductCard";

const Product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
      <img src={image} alt="air fryer" />
      <div className="product-info">
        <p>{title}</p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
        <p className="product_price">{price}</p>
      </div>
      <button className="product_button">Add to Basket</button>
    </div>
  );
};

export default Product;
