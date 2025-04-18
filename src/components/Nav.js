import React from 'react';
import Logo from '../assets/images/Logo.svg';
import '../styles/nav.css';

function Nav() {
    return (
        <nav className='navbar' >
            <div className='logo' >
                <img src={Logo} alt="Little Lemon Logo" />
            </div>
            <ul className="nav-links">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservations</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;