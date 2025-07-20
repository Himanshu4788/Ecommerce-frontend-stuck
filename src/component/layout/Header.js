import React, { useState } from 'react';
import './Header.css';
import menuIcon from '../../react-icons/menu.png'; // 3-line icon
import closeIcon from '../../react-icons/close.png'; // 'X' icon
import searchIcon from '../../react-icons/search-interface-symbol.png';
import cartIcon from '../../react-icons/shopping-cart.png';
import userIcon from '../../react-icons/user.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-header">
        <img 
          src={menuIcon} 
          alt="menu" 
          className="menu-icon" 
          onClick={() => setMenuOpen(true)} 
        />
      </div>

      <div className={`overlay ${menuOpen ? 'show' : ''}`}>
        <img 
          src={closeIcon} 
          alt="close" 
          className="close-icon" 
          onClick={() => setMenuOpen(false)} 
        />

        <h2 className="logo">ECOMMERCE.</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
          <li>About</li>
        </ul>

        <div className="icons">
          <img src={searchIcon} alt="search" />
          <img src={cartIcon} alt="cart" />
          <img src={userIcon} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;
