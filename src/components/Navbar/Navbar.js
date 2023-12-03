import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'


import "./styles.css";



const Navbar = () => {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
        <FontAwesomeIcon icon={faInfinity} size="2xl" style={{color: "#3b6dc4",}} />
        Infinity Solutions
        </a>
        <ul className="navbar-links">
          <li>
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="navbar-link">
              Products
            </a>
          </li>
          <li>
            <a href="/cart" className="navbar-link">
              Cart
            </a>
          </li>
          <li>
            <a href="/login" className="navbar-link">
              Login
            </a>
          </li>
          <li>
            <a href="/about" className="navbar-link">
              About Us
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
