import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log;
  return (
    <div>
      <h1>roductDetails</h1>
      <p>{params}</p>
    </div>
  );
};

export default ProductDetails;
