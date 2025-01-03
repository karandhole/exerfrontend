import React from 'react';

const WhatsAppChatButton = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <a
        href="https://wa.me/+918956301542" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          textAlign: 'center',
          lineHeight: '40px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          animation: 'pop 1.5s ease-in-out infinite', // Add animation here
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with your PNG icon link
          alt="Chat on WhatsApp"
          style={{
            width: '30px',
            height: '30px',
          }}
        />
      </a>
      <style>
        {`
          @keyframes pop {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppChatButton;
