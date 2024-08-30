import React, { useContext, useMemo, useState } from 'react';
import { ProductContext } from '../../containers/Context';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import Accordion from '../../containers/Accordion';
import RandomDetails from './RandomDetails';

const ProductDetails = () => {
    const { allProducts, addToCart } = useContext(ProductContext);
    const { id } = useParams();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [showNotification, setShowNotification] = useState(false);

    const Products = allProducts.find((item) => item.id === parseInt(id));

    if (!allProducts.length) {
        return <div>Loading...</div>;
    }

    const handleChangeQuantity = (event) => {
        setSelectedQuantity(parseInt(event.target.value));
    };

    const handleCart = () => {
        addToCart(Products, selectedQuantity);
        setShowNotification(true); // Show notification

        // Hide notification after 3 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className='container'>
            {Products && (
                <div className='product-card'>
                    <div className='product-left'>
                        <h3>{Products.title}</h3>
                        <img src={Products.image} alt={Products.title} />
                    </div>
                    <div className='product-right'>
                        <p>
                            <span>Description:</span>
                            <br />
                            <Accordion title="Description">
                                <h3>{Products.description}</h3>
                            </Accordion>
                        </p>
                        <h4>Price $: {Products.price}</h4>
                        <div className='quantity-selector'>
                            <label htmlFor='quantity'>Quantity:</label>
                            <select id='quantity' value={selectedQuantity} onChange={handleChangeQuantity}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </div>
                        <button className='btn-1' onClick={handleCart}>Add to Cart</button>
                        <button className='buynow'>BUY NOW</button>
                    </div>
                </div>
            )}

            {/* Notification */}
            {showNotification && (
                <div className="notification">
                    Added to Cart!
                </div>
            )}

            <RandomDetails currentTitle={Products.title} />
        </div>
    );
};

export default ProductDetails;
