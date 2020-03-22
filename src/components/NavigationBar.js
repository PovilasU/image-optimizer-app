import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Image optimizer</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/gallery">
          <li>Gallery1</li>
        </Link>
        <Link style={navStyle} to="/gallery2">
          <li>Gallery2</li>
        </Link>
        <Link style={navStyle} to="/gallery3">
          <li>Gallery3</li>
        </Link>
      </ul>
    </nav>
  );
};
export default NavigationBar;
