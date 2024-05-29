// CardSlider.js
import React, { useRef } from 'react';
import './CardSlider.css';

const CardSlider = ({ cards }) => {
  const sliderRef = useRef(null);

  return (
    <div className="card-slider">
      <div className="card-container" ref={sliderRef}>
        {cards.map((card, index) => (
            <div className="card" key={index}>
              {card}
            </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
