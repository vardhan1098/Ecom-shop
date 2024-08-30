import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [paymentMethodType, setPaymentMethodType] = useState('card');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [upiId, setUpiId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        let paymentMethod;

        if (paymentMethodType === 'card') {
            const cardElement = elements.getElement(CardElement);
            const result = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });
            paymentMethod = result.paymentMethod;
        } else if (paymentMethodType === 'upi') {
            const result = await stripe.createPaymentMethod({
                type: 'upi',
                upi: {
                    vpa: upiId,
                },
            });
            paymentMethod = result.paymentMethod;
        }

        if (paymentMethod && paymentMethod.error) {
            setError(paymentMethod.error.message);
            setLoading(false);
        } else {
            console.log(paymentMethod);
            setLoading(false);
            // Redirect to the Success page after a successful payment
            navigate('/success');
        }
    };

    return (
        <div className="order-container">
            <h2 className="order-title">Complete Your Order</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="payment-method-selection">
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethodType === 'card'}
                            onChange={() => setPaymentMethodType('card')}
                        />
                        Pay with Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="upi"
                            checked={paymentMethodType === 'upi'}
                            onChange={() => setPaymentMethodType('upi')}
                        />
                        Pay with UPI
                    </label>
                </div>

                {paymentMethodType === 'card' && (
                    <div className="card-input-container">
                        <CardElement className="card-element" />
                    </div>
                )}

                {paymentMethodType === 'upi' && (
                    <div className="upi-input-container">
                        <label>Enter UPI ID</label>
                        <input
                            type="text"
                            placeholder="your-upi-id@bank"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            required
                        />
                    </div>
                )}

                {error && <div className="error-message">{error}</div>}
                <button type="submit" disabled={!stripe || loading} className="pay-button">
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

export default Order;
