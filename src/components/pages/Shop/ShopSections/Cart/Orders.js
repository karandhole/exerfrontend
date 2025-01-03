import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token"); // Assuming JWT is stored in localStorage

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4900/orders/user-orders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(response.data.orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card">
            <h5>Order ID: {order._id}</h5>
            <p>Total Amount: ₹{order.amount.toFixed(2)}</p>
            <p>Status: {order.status}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <div className="order-items">
              <h6>Address:</h6>
              {order.address ? (
                <ul>
                  <li>
                    <p><strong>First Name:</strong> {order.address.firstName}</p>
                    <p><strong>Last Name:</strong> {order.address.lastName}</p>
                    <p><strong>Email:</strong> {order.address.email}</p>
                    <p><strong>Street:</strong> {order.address.street}</p>
                    <p><strong>City:</strong> {order.address.city}</p>
                    <p><strong>State:</strong> {order.address.state}</p>
                    <p><strong>Zipcode:</strong> {order.address.zipcode}</p>
                    <p><strong>Country:</strong> {order.address.country}</p>
                  </li>
                </ul>
              ) : (
                <p>No address provided.</p>
              )}
            </div>
            <div className="order-items">
              <h3>Items:</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item._id}>
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Price:</strong> ₹{item.price}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Selected Battery:</strong> {item.selectedBattery}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}

      <div className="contact-info">
        <p>
          For any inquiries or order status updates, contact us at:
          <strong> +91 8556301541/42</strong> or email us at
          <strong> sales@exerenergy.com</strong>.
        </p>
      </div>

    </div>

  );

};

export default Orders;
