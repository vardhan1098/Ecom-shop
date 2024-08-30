import React, { useState } from 'react';
import './ind.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDots = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='carousel'>
      <div className='carousel-inner'>
        {images.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <ul className='carousel-indicators'>
        {images.map((item, index) => (
          <li
            key={item.id}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => handleDots(index)}
          />
        ))}
      </ul>
      <button onClick={handlePrev} className='carousel-prev'>Previous</button>
      <button onClick={handleNext} className='carousel-next'>Next</button>
    </div>
  );
};

export default Carousel;
