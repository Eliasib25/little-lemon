import React from 'react';
import '../styles/modal.css';
import '../App.css';

const Modal = (props) => {
    return (
        <div className='container'>
            <div className='modal' >
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <button aria-label="On click" className='button' onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;