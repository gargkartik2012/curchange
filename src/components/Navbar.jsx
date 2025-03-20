import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggles the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Closes the menu when a link is clicked
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
    // You can replace this alert with actual search functionality
  };

  return (
    <nav className="navbar">
      {/* Left Side (Menu & Links) */}
      <div className="nav-left">
        <button onClick={toggleMenu} className="menu-button">
          ☰
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <Link to="/category" onClick={closeMenu}>Category</Link>
          <Link to="/cart" onClick={closeMenu}>Cart</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/* Right Side (Auth Links) */}
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <span>/</span>
        <Link to="/signup">SignUp</Link>
      </div>
    </nav>
  );
};

export default NavBar;
