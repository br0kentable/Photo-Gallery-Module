import React from 'react';

const Slide = (props) => {
  
  return (
    <a className="modal-open" href="#" onClick={() => console.log('!clicked openModal', props.index)} style={props.style}>
      <img src={props.src} />
    </a>
  )
}




export default Slide;
