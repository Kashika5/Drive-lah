import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Drive lah</h1>
      <div className="navbar-links">
        <a href="#learn">Learn more</a>
        <a href="#list">List your car</a>
        <a href="#inbox">Inbox</a>
        <div className="profile-icon">
          <img src="/path/to/profile/image.png" alt="User" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
