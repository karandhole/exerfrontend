import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const txnid = queryParams.get('txnid') || 'N/A'; // Fallback to 'N/A' if txnid is not present
  const message = queryParams.get('message') || 'Your payment was successful!'; // Fallback message

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Payment Success</h1>
      <p>{message}</p>
      <p><strong>Transaction ID:</strong> {txnid}</p>
      <button
        onClick={() => {
          window.location.href = '/orders'; // Redirect to home or another page
        }}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
      View Your Order
      </button>
    </div>
  );
};

export default Success;
