import React, { useEffect, useState } from 'react';
import './Success.css';

const Success = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            createSparkle();
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const createSparkle = () => {
        const newSparkle = {
            id: Math.random(),
            style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }
        };
        setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

        setTimeout(() => {
            setSparkles((prevSparkles) =>
                prevSparkles.filter((sparkle) => sparkle.id !== newSparkle.id)
            );
        }, 800);
    };

    return (
        <div className="success-container">
            <div className='new-container'>
            <h4>Payment Successful!</h4>
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="sparkle"
                    style={sparkle.style}
                ></div>
            ))}
            </div>
        </div>

    );
};

export default Success;
