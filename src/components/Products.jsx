import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product
        id="1"
        title="Amazon Basics Micro SDXC Memory Card with Full Size Adapter, A2, U3, Read Speed up to 100 MB/s, 128 GB, Black
        4.7 out of 5 stars 90,653"
        image="https://m.media-amazon.com/images/I/61DwejyTGkL._AC_UL320_.jpg"
        rating={4}
        price={12.07}
      />
      <Product
        id="2"
        title="Xbox Series X 1TB SSD Console - Includes Xbox Wireless Controller - Up to 120 frames per second - 16GB RAM 1TB SSD - Experience True 4K Gaming - Xbox Velocity Architecture"
        image="https://m.media-amazon.com/images/I/51ojzJk77qL._SX342_.jpg"
        rating={4}
        price={410.00}
      />
    </div>
    <div className="products_row">
    <Product
        id="3"
        title="Gaming Headset for PS4, PS5, PC, Xbox One, Over Ear Headphones with Surround Sound,Wired 3.5mm Headphones,Lightweight Comfortable Earmuffs for Switch Laptop Mobile"
        image="https://m.media-amazon.com/images/I/71dEOjKHytL._AC_SY355_.jpg"
        rating={1}
        price={13.99}
      />
      <Product
        id="4"
        title="Xbox Core Wireless Gaming Controller – Deep Pink – Xbox Series X|S, Xbox One, Windows PC, Android, and iOS"
        image="https://m.media-amazon.com/images/I/61hxzGfRpKL._SX342_.jpg"
        rating={4}
        price={64.97}
      />
      <Product
        id="5"
        title="PXN V9 PC Steering Wheel with Pedals and Shifter 270/900 Degree Gaming Racing Wheel for PC,PS4,PS3,Xbox One, Xbox Series X/S,N-Switch (NOT Support Mac/PS5)"
        image="https://m.media-amazon.com/images/I/71gTBiEg6OS._SX385_.jpg"
        rating={3}
        price={179.99}
      />
    </div>
    <div className="products_row">
    <Product
        id="6"
        title="Next Level Racing NLR-R001 GTRacer Racing Simulator Cockpit"
        image="https://m.media-amazon.com/images/I/61F4mpGdcRL._SX385_.jpg"
        rating={4}
        price={386.25}
      />
    </div>
    </>
    
  );
};

export default Products;
