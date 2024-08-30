import React, { useState } from 'react';
import './kid.css';

const kidsCarousel = ({items}) => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const handlePrev = () =>{
        setCurrentIndex((prev) =>(prev === 0? items.length -1 : prev -1));
    }

    const handleNext = () =>{
        setCurrentIndex((prev) => (prev === items.length -1 ? 0 :prev + 1));
    }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.image} alt={item.title} />
              <div className="carousel-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  )
}

export default kidsCarousel