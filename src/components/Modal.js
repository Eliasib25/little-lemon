import React from 'react';
import '../styles/modal.css';

const Modal = (props) => {
    return (
        <div className='container'>
            <div className='modal' >
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;