import React from 'react';
import Follow from './Follow';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <>
            <Follow/>
            </>
            <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h3>CUSTOMER HELP</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>TOP CATEGORIES</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Watches</a></li>
            <li><a href="#">Gift</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Luxe</a></li>
            <li><a href="#">Bargain Store</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Corporate Site</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>POLICIES</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Delivery Policy</a></li>
            <li><a href="#">Exchange & Return</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>REWARDS</h3>
          <ul>
            <li><a href="#">First Citizen</a></li>
            <li><a href="#">First Citizen Club</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-top">
        <hr />
        <p>© Shopyee. 2024. All Rights Reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Disclaimer</a>
        </p>
      </div>
    </footer>
            
        </div>
    );
};

export default Footer;