import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Bookstore</Link>
        <div className="navbar-items">
          <form className="search-form">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
          <Link to="/cart" className="navbar-icon">
            Cart
          </Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/signup" className="navbar-link">Sign Up</Link>
          <Link to="/admin" className="navbar-link">Admin</Link>
          <Link to="/" className="navbar-link">Home</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
