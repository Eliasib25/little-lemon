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
                <li><Link to="/" >Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link to="/BookingPage" >Reservations</Link></li>
                <li><Link>Order Online</Link></li>
                <li><Link>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;