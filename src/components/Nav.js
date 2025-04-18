import React from 'react';
import Logo from '../assets/images/Logo.svg';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='navbar' >
            <div className='logo' >
                <img src={Logo} alt="Little Lemon Logo" />
            </div>
            <ul className="nav-links">
                <li><Link aria-label="On click" to="/" >Home</Link></li>
                <li><Link aria-label="On click">About</Link></li>
                <li><Link aria-label="On click">Menu</Link></li>
                <li><Link aria-label="On click" to="/BookingPage" >Reservations</Link></li>
                <li><Link aria-label="On click">Order Online</Link></li>
                <li><Link aria-label="On click">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;