import React from 'react';
import '../styles/footer.css';
import logoFooter from '../assets/images/logoFooter.png';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logoFooter} alt="Little Lemon Logo" />
          </div>
  
          <div className="footer-section">
            <h4>Doormat Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>123 Lemon St, Chicago</li>
              <li>(123) 456-7890</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>Social Media Links</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;