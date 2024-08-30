import React, { useState } from 'react';
import './Accord.css'; 

const Accordion = ({ title, children,isOpen,onToggle }) => {

  const handleToggle = () => {
    onToggle(); 
  };

  return (
    <div className="accordion">
      <h3 className="accordion-header" onClick={handleToggle}>
        {title}
        <span className="accordion-toggle">{isOpen ? '-' : '+'}</span>
      </h3>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
         {children}
      </div>
    </div>
  );
};

export default Accordion;