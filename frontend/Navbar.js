

import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎬 Movie Review</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Reviews</li>
        <li>Search</li>
        <li>Genres</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
