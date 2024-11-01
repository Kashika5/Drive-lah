
import React from 'react';
import '../styles/LeftNavigation.css'; // Import the CSS file for styling

const LeftNav = () => {
    return (
        <div className="left-nav">
            
            <ul>
                <li><a href="#Location">Location</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Rules">Rules</a></li>
                <li><a href="#Pricing">Pricing</a></li>
                <li><a href="#Promotion">Promotion</a></li>
                <li><a href="#Pictures">Pictures</a></li>
                <li><a href="#Insurance">Insurance</a></li>
                <li><a href="#Subscription">Subscription</a></li>
                <li><a href="#Device">Device</a></li>
                <li><a href="#Easy Access">Easy Access</a></li>
            </ul>
        </div>
    );
};

export default LeftNav;
