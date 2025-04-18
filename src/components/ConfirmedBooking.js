import React from 'react';
import '../styles/confirmedbooking.css';
import { Link } from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';

const ConfirmedBooking = () => {
    return (
        <Main>
            <div className="confirmed">
                <h1>Reservation Confirmed ✅</h1>
                <p>Your table has been successfully reserved. We look forward to seeing you!</p>
                <Link aria-label="On click" to="/BookingPage" className='confirmed-button' >Volver</Link> 
            </div>
            <Footer />
        </Main>
    );
}

export default ConfirmedBooking;