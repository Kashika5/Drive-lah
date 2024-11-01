import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    "Location", "About", "Features", "Rules", "Pricing",
    "Promotion", "Pictures", "Insurance", "Subscription", "Device", "Easy Access"
  ];

  return (
    <div className="sidebar">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <FaCheckCircle className="check-icon" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
