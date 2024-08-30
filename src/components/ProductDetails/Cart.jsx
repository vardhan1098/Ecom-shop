import React, { useContext, useState } from 'react';
import { ProductContext } from '../../containers/Context';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, decreaseQuantity,showNotification } = useContext(ProductContext);
    const navigate = useNavigate();
   

    const totalAmount = cartItems.reduce((acc,item) => acc + item.price * item.quantity,0)

    if (cartItems.length === 0) {
        return <div className="cart-empty">No Products in Cart</div>;
    }

    const handleCheckOut = () => {
        navigate(`/CheckOut?totalAmount=${totalAmount}`);
    }
    
    return (
        <div className="cart-container">
        {cartItems.map((item) => (
          <>
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <h3>{item.title}</h3>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item, 1)}>+</button>
                </div>
                <>
                  <p>
                    <hr />$ : {item.price * item.quantity} <hr />
                  </p>
                </>
                <button className="cart-item-remove" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          </>
        ))}
        <div className="cart-checkout">
          <p>Amount : ${totalAmount}</p>
          <p>Shipping Charges : </p>
          <h4>Total Amount : ${totalAmount}</h4>
          <button className="checkout-button" onClick={handleCheckOut}>Proceed to Checkout</button>
        </div>
        {showNotification && (
            <div className='notify'>
                Removed From the Cart!!!
            </div>
        )}
      </div>
    );
};

export default Cart;
