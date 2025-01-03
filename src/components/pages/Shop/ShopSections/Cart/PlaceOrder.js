import React, { useState, useEffect } from "react";
import { useShop } from "../../ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import razorpay from "../../../../images/partners/razor.png";
import yes from "../../../../images/partners/yes.webp";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { formatPrice, cart, clearCart } = useShop();

  const shippingfees=3000;
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity + shippingfees ,
    0
  );
  const subtotalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity  ,
    0
  );



  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [error, setError] = useState(""); // Error handling
  const storedToken = localStorage.getItem("token");
  const backendUrl = "http://localhost:4900/orders";

  // Load Razorpay script dynamically
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };
    loadRazorpayScript();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    for (const field in formData) {
      if (formData[field] === "") {
        setError("Please fill all the fields.");
        return false;
      }
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  const initPay = (order) => {
    const options = {
      key: "rzp_test_DOhvdl4JP3fCKF", // Replace with your Razorpay test key
      amount: order.amount,
      currency: order.currency,
      name: "Test Order",
      description: "Testing Razorpay Integration",
      order_id: order.id, // Order ID from the backend
      handler: (response) => {
        console.log("Payment Response:", response);
        alert("Payment successfully simulated!"); // Simulate success without backend verification
        // You can call an API to confirm the payment with the backend if needed
        confirmRazorpayPayment(response.razorpay_payment_id, order.id);
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const confirmRazorpayPayment = async (paymentId, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/confirm/razorpay`, // Confirm payment route
        { paymentId, orderId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      if (response.data.success) {
        alert("Payment confirmed successfully!");
        clearCart({});
        navigate("/orders");
      } else {
        alert("Payment confirmation failed.");
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      alert("Payment confirmation failed. Please try again.");
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderData = {
      items: cart,
      amount: totalAmount,
      address: formData,
      paymentMethod: method,
      payment: method !== "cod", // Prepaid methods marked as paid
    };



    // for easebuzz payment 






    try {
      switch (method) {
        case "cod":
          const response = await axios.post(
            `${backendUrl}/place`,
            orderData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );
          if (response.data.success) {
            alert("Order placed successfully!");
            clearCart({});
            // removeItemFromCart(cart);
            navigate("/orders");
          } else {
            alert(response.data.message || "Failed to place the order.");
          }
          break;


        case "razorpay":
          try {
            const response = await axios.post(
              `${backendUrl}/razorpay`, // Adjust to match your test backend route
              orderData,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${storedToken}`,
                },
              }
            );

            if (response.data.success) {
              initPay(response.data.order); // Pass the test order directly to Razorpay UI
            } else {
              alert(response.data.message || "Failed to create Razorpay order.");
            }
          } catch (error) {
            console.error("Error creating Razorpay order:", error);
            alert("Failed to create Razorpay order. Please try again.");
          }
          break;
        case "easebuzz":
          try {
            const easebuzzResponse = await axios.post(
              `${backendUrl}/easebuzz/initiate`, // Backend endpoint
              {
                amount: totalAmount,
                firstname: formData.firstName,
                email: formData.email,
                phone: formData.phone,
                productinfo: "Order Payment",
                address: formData,
                items: cart,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${storedToken}`,
                },
              }
            );

            if (easebuzzResponse.data.success) {
              const paymentUrl = easebuzzResponse.data.paymentUrl;

              if (!paymentUrl) {
                alert("Payment URL is missing from the response.");
                return;
              }

              // Redirect user to Easebuzz payment page
              window.location.href = paymentUrl;


            } else {
              alert("Failed to initiate Easebuzz payment: " + easebuzzResponse.data.message);
            }
          } catch (error) {
            console.error("Error initiating Easebuzz payment:", error);
            alert("Failed to initiate Easebuzz payment. Please try again.");
          }
          break;





        default:
          break;
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };




  return (
    <div className="place-order-container">
      <div className="flex place-order-content">
        <div className="delivery-column flex-1">
          <div className="section-title">
            <h3>DELIVERY INFORMATION</h3>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="input-fields">
            <div className="flex gap-3">
              <input
                className="input-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={onChangeHandler}
              />
              <input
                className="input-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={onChangeHandler}
              />
            </div>
            <input
              className="input-field"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Street"
              name="street"
              value={formData.street}
              onChange={onChangeHandler}
            />
            <div className="flex gap-3">
              <input
                className="input-field"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={onChangeHandler}
              />
              <select
                className="input-field"
                name="state"
                value={formData.state}
                onChange={onChangeHandler}
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <input
                className="input-field"
                type="number"
                placeholder="Zip Code"
                name="zipcode"
                value={formData.zipcode}
                onChange={onChangeHandler}
              />
              <input
                className="input-field"
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={onChangeHandler}
              />
            </div>
            <input
              className="input-field"
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="checkout-column flex-1">
          <div className="cart-total">
            <h4>Cart Total</h4>
            <div className="price-detail">
              <div className="flex justify-between">
                <h6>Sub Total:</h6>
                <h6>{formatPrice(subtotalAmount)}</h6>
              </div>
              <div className="flex justify-between">
                <h6>Shipping Fee:</h6>
                <h6>{formatPrice(3000)}</h6>
              </div>
              <div className="flex justify-between">
                <h5>Total:</h5>
                <p>-/ inclusive of GST</p>
                <h5>{formatPrice(totalAmount)}</h5>
              </div>
            </div>
          </div>

          <div className="payment-methods mt-8">
            <h3>PAYMENT METHOD</h3>
            <div className="payment-options flex gap-4">


              <div className="option">
                <input
                  type="radio"
                  id="razorpay"
                  name="payment-method"
                  checked={method === "razorpay"}
                  onChange={() => setMethod("razorpay")}
                />
                <label htmlFor="razorpay">
                  <img className="payment-icon" src={razorpay} style={{ width: '100px', objectFit: 'contain' }} alt="Razorpay" />
                  <p>Razorpay</p>
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  id="easebuzz"
                  name="payment-method"
                  value="easebuzz"
                  checked={method === "easebuzz"}
                  onChange={() => setMethod("easebuzz")}
                />
                <label htmlFor="easebuzz">
                  <img className="payment-icon" src={yes} style={{ width: '100px', objectFit: 'contain' }} alt="Easebuzz" />
                  <p>Easebuzz</p>
                </label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                />
                <label>Cash On Delivery</label>
              </div>


            </div>
          </div>

          <div className="place-order-button">
            {/* onClick={handlePlaceOrder}  */}
            <button onClick={handlePlaceOrder} style={{ background: 'black', color: 'white' }}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
