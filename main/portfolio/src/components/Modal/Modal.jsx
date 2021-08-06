import React from 'react';
import ReactDOM  from 'react-dom';
import './Modal.css';

const Modal = ({closeModal})  => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'> 
            <div onClick={(e)=>  e.stopPropagation() }className='modal-container'>

                <div className='upper-section'>
                <h1>Glad you decided to pay me a visit!</h1>
                <p onClick={closeModal} className='close'>&times;</p>
                </div>

                <div className='middle-section'>
                    {/* <h3>React mega tutorial is live!</h3> */}
                    <p> Hope you are having a great day!</p>
                    
                </div>

                <div className='lower-section'>
                    
                    <a onClick={closeModal} className='modal-btn btn-red'>Close</a>

                    <a
                        href='https://www.linkedin.com/in/ameerulshah/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Visit me on LinkedIn
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
        
    );
};

export default Modal;