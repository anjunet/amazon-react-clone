import React from "react";
import "./Products.css";
import Product from "./Product/Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Instant Vortex Plus 6-in-1 Air Fryer, Silver, 5.7 Litre Capacity"
          image="https://m.media-amazon.com/images/I/510qdEVaEaL._AC_SY355_.jpg"
          rating="4"
          price="799.99"
        />
        <Product
          id="12"
          title="SAMSUNG Cream Watch7 40mm BT with Pink Athleisure Band"
          image="https://m.media-amazon.com/images/I/711n-D7ZRrL._AC_SX679_.jpg"
          rating="5"
          price="4,496.99"
        />
        <Product
          id="123"
          title="Sennheiser HD 450BT Wireless Headphone, Black"
          image="https://m.media-amazon.com/images/I/61h8NTXn5oL._AC_SL1500_.jpg"
          rating="5"
          price="1,520.99"
        />
      </div>

      <div className="products_row">
        <Product
          id="1234"
          title="Samsung Galaxy S10 Ultra Tablet with Keyboard Cover and 45W Charger"
          image="https://m.media-amazon.com/images/I/51Ohxia-l4L._AC_SX679_.jpg"
          rating="4"
          price="22,999.99"
        />
        <Product
          id="12345"
          title="Pu Leather Case Hard Shell for Macbook Air 13inch-Grey"
          image="https://m.media-amazon.com/images/I/517H82V0vSL._AC_SY300_SX300_.jpg"
          rating="3"
          price="296.99"
        />
        <Product
          id="123456"
          title="TUFF LUV Mount Holder for Apple TV 4th Generation"
          image="https://m.media-amazon.com/images/I/71SsKm0Ya8L._AC_SX522_.jpg"
          rating="5"
          price="280.99"
        />
        <Product
          id="1234567"
          title="Grandstream GRP2612W IP Phone | 4 Lines, 4 SIP Accounts | 2.4-Inch Color Display | Wi-Fi 5 | Dual-port 10/100 Ethernet with Integrated PoE"
          image="https://m.media-amazon.com/images/I/61GJmvGG+AL._AC._SR360,460.jpg"
          rating="4.5"
          price="1,625.99"
        />
      </div>
      <div className="products_row">
        <Product
          id="12345678"
          title="HP 15S I5 1334U 16GB 512GB SSD W11 HOME SILVER"
          image="https://m.media-amazon.com/images/I/71UBNrOKZHL._AC_SX679_.jpg"
          rating="4.2"
          price="12,639."
        />
      </div>
    </>
  );
};

export default Products;
