import React from "react";
import { useShop } from "../../ShopContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import DefaultImage from "../../../../images/smartwatch.gif";

export const CartItems = () => {
  const { formatPrice, cart, removeItemFromCart } = useShop();
  const shippingfees =3000;

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity + shippingfees ,
    0
  );
  const subtotalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity  ,
    0
  );

  return (
    <div className="cart-container mb-5 pb-5">
      <div className="row container border-bottom border-secondary mx-auto">
        <div className="col-md-2 py-3 d-none d-md-block text-center">
          <h5 className="fw-bold">Product</h5>
        </div>
        <div className="col-3 py-3 text-center">
          <h5 className="fw-bold">Name</h5>
        </div>
        <div className="col-2 col-md-1 py-3 text-center">
          <h5 className="fw-bold">Color</h5>
        </div>
        <div className="col-3 py-3 text-center">
          <h5 className="fw-bold">Price x Quantity</h5>
        </div>
        <div className="col-2 py-3 text-center">
          <h5 className="fw-bold">Total</h5>
        </div>
        <div className="col-2 col-md-1 py-3 text-center">
          <h5 className="fw-bold">Delete</h5>
        </div>
      </div>

      {cart.map((product) => (
        <div
          key={`${product.id}-${product.selectedColor}`}
          className="row container border mx-auto align-items-center py-2"
        >
          <div className="col-md-2 text-center d-none d-md-block">
            <img
              className="border rounded w-50"
              src={product.image && product.image.length > 0 ? product.image : DefaultImage}
              alt={product.name}
            />
          </div>
          <div className="col-3 text-center">
            <h5>{product.name}</h5>
          </div>
          <div className="col-2 col-md-1 text-center">
            <span
              style={{
                display: "inline-block",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                backgroundColor: product.selectedColor,
                border: "1px solid #000",
              }}
            ></span>
          </div>
          <div className="col-3 text-center">
            <span>
              {formatPrice(product.price)} x {product.quantity}
            </span>
          </div>
          <div className="col-2 text-center">
            <h5>{formatPrice(product.price * product.quantity)}</h5>
          </div>
          <div className="col-1 text-center">
            <MdOutlineDeleteForever
              className="fs-2 text-danger cursor-pointer"
              onClick={() =>
                removeItemFromCart(product.id, product.selectedColor,product.selectedBattery)
              }
            />
          </div>
        </div>
      ))}

      <div className="row container mx-auto mt-5 py-5">
        <h4>Cart Total</h4>
        <div className="col-md-6 mx-auto my-4">
          <div className="d-flex justify-content-between border-bottom py-2">
            <h6>Sub Total:</h6>
            <h6>{formatPrice(subtotalAmount)}</h6>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2">
            <h6>Shipping Fee:</h6>
            <h6>{formatPrice(3000)}</h6>
          </div>
          <div className="d-flex justify-content-between py-2">
            <h5>Total:</h5> 
         <p>-/ inclusive of GST</p>
            <h5 className="fw-bold">{formatPrice(totalAmount)}</h5>
          </div>
          <a href="/placeorder" className="btn btn-outline-warning w-100 mt-4">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};
