import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import ShoppingContext from "../context/shopping/shoppingContext";

const Orders = () => {
  const { user } = useContext(ShoppingContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user?.uid, "orders");

      const q = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });

      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Total: ${order.data.amount / 100}</p>
          <p>{new Date(order.data.created * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;


// import React from 'react'
// import './Orders.css'
// import { db } from "../firebase";

// const Orders = () => {
//   return (
//     <div>
//       <h1>Your Orders</h1>
//     </div>
//   );
// }

// export default Orders;
