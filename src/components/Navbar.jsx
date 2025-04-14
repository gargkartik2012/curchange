import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const handleSearch = () => alert(`Searching for: ${searchTerm}`);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      {/* Left Side (Menu & Links) */}
      <div className="nav-left">
        <button onClick={toggleMenu} className="menu-button">
          ☰
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/category" onClick={closeMenu}>
            Category
          </Link>
          <Link to="/cart" onClick={closeMenu}>
          🛒
          </Link>
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
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <span>/</span>
            <Link to="/signup">SignUp</Link>
          </>
        ) : (
          <>
           
            <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
              🗑️
            </span>
            <button
              onClick={handleLogout}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
