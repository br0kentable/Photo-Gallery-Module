// import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import PhotoSlider from './PhotoSlider';
import PropTypes from 'prop-types';
// import './modalStyle.css';

const Modal = (props) => {
  console.log('inside Modal', props)
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" style={modalOverlayStyles}>
      
        <div className="actions">
          
          <button className="close-modal" style={modalCloseStyles}>
            <i className="close icon" style={closeModalButtonStyles} onClick={props.handleHide}></i>  
          </button>
        
        
        <div className="content">
          <PhotoSlider />
        </div>
      
      </div>
    </div>, document.querySelector('#modal')
  )
}

export default Modal;





//accepts 3 props children/props, show = a boolean value, closeCallback = function
// const Modal = (props) => {
//   console.log('inside Modal Component:', props);
//   return (
//     <div className="modal" style={modalOverlayStyles}>
//       <div className="overlay" style={modalOverlayStyles}>
//         <button className="close-modal">
//           <i className="close icon" style={modalCloseStyles} onClick={props.handleHide}></i>  
//         </button>
//       </div>
//         {/* <button title="close" className="close_modal" onClick={() => console.log('been clicked')} style={modalCloseStyles}>
//           <i className="fas fa-times" style={closeModalButtonWrapperShowStyles} onClick={() => console.log('been clicked')}></i>
//         </button> */}    
//       </div>
//   )
// };



const modalStyles = {
  backgroundColor: 'rgba(0, 0, 0, .98)',
  position: 'fixed',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  zIndex: '110',
};


  const modalOverlayStyles = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0,.9)',
  };

  const modalContentStyles = {
    zIndex: '1040',
    position: 'fixed',
    top: '0px',
    left: '0',
    width: '100%',
    height: '100%',
    // left: '0px',
    // right: '0px',

    backgroundColor: 'rgb(0,0,0,.9)',
    opacity: '0.5',
  }


  const modalCloseStyles = {
    position: 'absolute',
    top: '0',
    right: '8px',
    fontSize: '.5rem',
    fontWeight: '50',
    transition: 'all .25s ease-in-out',
  }

  // const modalFooterContentStyles = {
  //   fontSize: '28px',
  //   fontWeight: '200',
  //   margin: '20px 0 40px',
  //   textAlign: 'center'
  // }

  const modalCloseButtonHiddenStyles = {
    padding: '20px',
    backgroundColor: 'transparent',
    border: '0',
    color: 'inherit',
    font: 'inherit',
    margin: '0',
    overflow: 'visible',
    cursor: 'pointer'
  }

  // const closeModalStyles = {
  //   position: 'absolute',
  //   right: '10px',
  //   top: '10px',
  //   cursor: 'pointer',
  //   fontSize: '18px',
  //   opacity: '0.5',
  //   background: 'none',
  //   border: 'none',
  //   transition: 'opacity 0.2s ease'
  // }

  // const closeModalHoverStyles = {
  //   opacity: '0.9'
  // }

  const closeModalButtonStyles = {
    fontFamily: 'icons',
    speak: 'none',
    fontWeight: '400',
    textTransform: 'none',
    lineHeight: '1',
    color: '#6f737b',
    fontSize: '1.2rem',
    lineHeight: '2',
    position: 'absolute',
    textAlign: 'center',
    top: '16px',
    right: '16px',
    width: '2rem'
  }


  // // position: absolute;
  // // padding: 25px;
  // // right: 0;
  // // top: 20px;






  // export default Modal;
