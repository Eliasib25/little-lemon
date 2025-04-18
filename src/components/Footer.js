import React from 'react';
import '../styles/footer.css';
import logoFooter from '../assets/images/logoFooter.png';
import { Link } from 'react-router-dom';

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
              <li><Link aria-label="On click" to="/" >Home</Link></li>
              <li><Link aria-label="On click">About</Link></li>
              <li><Link aria-label="On click">Menu</Link></li>
              <li><Link aria-label="On click" to="/BookingPage" >Reservations</Link></li>
              <li><Link aria-label="On click">Order Online</Link></li>
              <li><Link aria-label="On click">Login</Link></li>
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
              <li><Link aria-label="On click">Instagram</Link></li>
              <li><Link aria-label="On click">Facebook</Link></li>
              <li><Link aria-label="On click">X / Twitter</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;