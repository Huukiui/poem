import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Додамо файл стилів для Navbar
import HeartAnimation from './HeartAnimation'; // Додамо компонент для анімації сердечок

const Navbar = () => {
  const [showHearts, setShowHearts] = useState(false);

  const handleClick = () => {
    setShowHearts(true);
    setTimeout(() => {
      setShowHearts(false);
    }, 4200); // Анімація буде показуватися 2 секунди
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/poems">Вірші</Link></li>
        <li className="navbar-item"><Link to="/memories">Спогади</Link></li>
        <li className="navbar-item" onClick={handleClick}>Тицьни сюди</li>
      </ul>
      {showHearts && <HeartAnimation />}
    </nav>
  );
};

export default Navbar;
