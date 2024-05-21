import React from 'react';
import './HeartAnimation.css'; // Стилі для анімації

const HeartAnimation = () => {
  const hearts = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="heart" style={{ animationDelay: `${Math.random() * 2}s` }}></div>
  ));

  return <div className="heart-container">{hearts}</div>;
};

export default HeartAnimation;
