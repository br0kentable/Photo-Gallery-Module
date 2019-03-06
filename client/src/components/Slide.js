import React from 'react';

const Slide = (props) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <a className="modal-open" href="#" onClick={() => console.log('!clicked openModal', props.index)} style={props.style}>
      <img src={props.src} />
    </a>
  )
}




export default Slide;
