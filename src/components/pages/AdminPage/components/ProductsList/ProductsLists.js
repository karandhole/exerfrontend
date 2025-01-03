import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProductsLists = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Error state for user feedback

  const storedToken = localStorage.getItem("token");
  const backendUrl = "https://exerbackend-cm9f.vercel.app/orders";

  // Fetch orders from the API
  const fetchOrders = async () => {
    try {
      if (!storedToken) {
        throw new Error("No token found. Please log in.");
      }

      const response = await axios.get(`${backendUrl}/all-orders`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      });

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        throw new Error("Failed to fetch orders. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError(err.response?.data?.message || err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div className="loading">Loading orders, please wait...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="orders-container">
    <h1>Your Orders</h1>
    {orders.length === 0 ? (
      <p>No orders found.</p>
    ) : (
      orders.map((order) => (
        <div key={order._id} className="order-card">
          <h2>Order ID: {order._id}</h2>
          <p><strong>Total Amount:</strong> ₹{order.amount.toFixed(2)}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>



          

          
          {/* <div className="order-address">
            <h3>Shipping Address:</h3>
            <p><strong>First Name:</strong> {order.address.firstName}</p>
            <p><strong>Last Name:</strong> {order.address.lastName}</p>
            <p><strong>Email:</strong> {order.address.email}</p>
            <p><strong>Phone:</strong> {order.address.phone}</p>
            <p><strong>Street:</strong> {order.address.street}</p>
            <p><strong>City:</strong> {order.address.city}</p>
            <p><strong>State:</strong> {order.address.state}</p>
            <p><strong>Zipcode:</strong> {order.address.zipcode}</p>
            <p><strong>Country:</strong> {order.address.country}</p>
          </div> */}

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

export default ProductsLists;
















// import React, {  useEffect } from 'react'
// import { MdOutlineDeleteForever } from "react-icons/md";
// import { useAdminContext } from '../../AdminContext';

// export const ProductsLists = () => {

//     const {formatPrice, fetchProducts, removeProduct, allProducts  } = useAdminContext();

//     useEffect(() => {
//       if (fetchProducts) {
//         fetchProducts();
//       }
//     }, [fetchProducts]);
    

//   return (
//     <div className="py-2 m-0 p-0" id='SideContent'>
//       <h2 className="text-center my-4 "> Products List </h2>

//         {/* --------------------- table heading  */}
//       <div className="row mx-auto border-bottom border-3 border-secondary-subtle pt-3 px-1">
//         <div className="col-5 col-md-7 py-3">
//           <h6 className="m-0 p-0 fw-bold text-center text-secondary">Product</h6>
//         </div>
//         <div className="col-2 col-md-1 py-3">
//           <h6 className="m-0 p-0 fw-bold text-center text-secondary">Color</h6>
//         </div>
//         <div className="col-3 py-3">
//           <h6 className="m-0 p-0 fw-bold text-center text-secondary"> Price</h6>
//         </div>
//         <div className="col-2 col-md-1 py-3">
//           <h6 className="m-0 p-0 fw-bold text-center text-secondary">Delete</h6>
//         </div>
//       </div>

//       {/* ------------------------ product details */}

//       {allProducts.map((product, index) =>  {
//         return (
            
//         <div className='row mx-auto border-bottom border-dark px-1 pt-3 pb-1' key={index}>
//         <div className='col-5 col-md-7 row m-0 p-0 border-end border-dark'>

//             <div className='col-12 col-md-4 border-dark p-2 d-flex'>
//               <img src={product.image[0]} className='w-50 mx-auto rounded-4 align-self-center' alt='' id="Product-Image"/> 
//             </div>
//             <div className='col-12 col-md-8 align-content-center'>
//                 <p className='text-dark fw-bold m-0 '>Name : <span className='text-secondary fw-normal'>{product.name}</span> </p> 
//                 <p className='text-dark fw-bold m-0 '>Category :  <span className='text-secondary fw-normal'>{product.category}</span></p> 
//                 <p className='m-0 '>                
//                 <span className={`badge rounded-5 text-bg-primary my-2 px-2 py-1 ${product.bestSeller ? "d-inline-block" : "d-none"}`}>
//                     Best Seller
//                 </span></p> 

//             </div>
//         </div>

//         <div className='col-2 col-md-1 row m-0 p-0 border-end border-dark align-content-center'>
//                 {product.colors.map((color,index) => {
//                     return (
//                       <div className='col-12' key={index}>
//                           <span
//                             className="p-2 p-lg-3 mx-auto my-1 align-items-center justify-content-center d-flex"
//                             style={{
//                               borderRadius: "50%",
//                               height: "12px",
//                               width:"12px",
//                               backgroundColor: color,
//                               border: "0.5px solid black",
//                             }}
//                             key={index}
//                           >{index + 1 }</span>
//                       </div>
//                     );
//                 })}
//         </div>

//         <div className='col-3 border-end border-secondary m-0 p-0 align-content-center'>
//             <p className='text-dark fw-bold m-0 text-center'>Old Price : 
//                 <span className='text-secondary fw-semibold'>{ formatPrice(product.old_price)}</span> </p>
//             <p className='text-dark fw-bold m-0 text-center'>New Price :  
//                 <span className='text-success fw-bold'>{formatPrice(product.price)}</span> </p>
//         </div>

//         <div className="col-2 col-md-1 m-0 p-0 align-content-center text-center">
//               <button className='btn btn-danger px-1 py-2'
//                onClick={() => removeProduct(product.id)}>
//                 <MdOutlineDeleteForever className=" fs-2" />
//               </button>
//             </div>
    
//         </div>
//         );      
//     })}
      
//     </div>
//   );
// }

