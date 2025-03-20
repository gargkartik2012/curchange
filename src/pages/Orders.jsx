import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the user's orders from the backend
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order.id} className="order">
            <h3>Order #{order.id}</h3>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Total: {order.total}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>{item.name} - {item.quantity} x {item.price}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>You have no orders.</p>
      )}
    </div>
  );
};

export default Orders;
