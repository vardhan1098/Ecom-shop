import React, { useState } from 'react';
import './Check.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import rupay from '../../assets/rupay.webp';
import visa from '../../assets/visa.webp';

const Check = () => {
    const [method, setMethod] = useState("cod");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const stripe = useStripe();
    const elements = useElements();

    // Extract totalAmount from the URL parameters
    const params = new URLSearchParams(location.search);
    const totalAmount = params.get('totalAmount') || 0;
    const subtotal = parseFloat(totalAmount);
    const shippingFee = 10.00;  
    const total = subtotal + shippingFee;


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            console.log('Payment successful!', paymentMethod);
            // Handle payment processing on your server
            navigate('/Orders');
        }
    };

    return (
        <div className="checkout-container">
            <div className="delivery-info">
                <h3>DELIVERY INFORMATION</h3>
                <form className="delivery-form">
                    <div className="form-group">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>
                    <div className="form-group fullwidth">
                        <input type="email" placeholder="Email address" />
                    </div>
                    <div className='form-group fullwidth'>
                    <input type="text" placeholder="Street" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Zipcode" />
                        <input type="text" placeholder="Country" />
                    </div>
                    <input type="text" placeholder="Phone" className="phone-field"/>
                </form>
            </div>
            
            <div className="cart-payment-container">
                <div className="cart-totals">
                    <h3>CART TOTALS</h3>
                    <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                    <p>Shipping Fee: <span>${shippingFee.toFixed(2)}</span></p>
                    <p>Total: <span>${total.toFixed(2)}</span></p>
                </div>

                <div className="payment-method">
                    <h3>PAYMENT METHOD</h3>
                    <div className="payment-options">
                        <div onClick={() => setMethod('Visa')} className={`${method === 'Visa' ? "Loader" : ""}`}>
                            <img src={visa} alt="visa" />
                        </div>
                        <div onClick={() => setMethod('razorpay')} className={`${method === "razorpay" ? "Loader" : ""}`}>
                            <img src={rupay} alt="razorpay" />
                        </div>
                        <div onClick={() => setMethod('cod')} className={`${method === "cod" ? "Loader" : ""}`}>
                            <p>CASH ON DELIVERY</p>
                        </div>
                    </div>
                </div>

                {method === 'Visa' && (
                    <form onSubmit={handleSubmit}>
                        <CardElement />
                        {errorMessage && <div className="error">{errorMessage}</div>}
                        <button type="submit" className='orderbtn' disabled={!stripe}>Place The Order</button>
                    </form>
                )}

                {method === 'cod' && (
                    <button onClick={() => navigate('/Orders')} className='orderbtn'>Place The Order</button>
                )}
              
            </div>
        </div>
    );
};

export default Check;
