import React from 'react';

const Slide = (props) => {
  console.log('inside a Slide props:', props);
  return (
    <div className="slideContainer">
        <button className="prev-img" style={prevArrowStyles}>
          <i className="angle left icon" onClick={()=> props.prev()}></i></button>
        
        <img src={props.img} />

        <button className="next-img" style={nextArrowStyles}>
          <i className="angle right icon" onClick={()=> props.next()}></i></button>
        <div> 
        </div>
    </div>
  )
}

export default Slide;

const prevArrowStyles = {
  position: 'absolute',
  top: '50%',
  left: '250px',
  zIndex: '999',
  height: '20px',
  width: '20px',
  color: '#91949a',
  backgroundColor: 'transparent',
  opacity: '0.5',
  border: 'none',
}

const nextArrowStyles = {
  position: 'absolute',
  top: '50%',
  right: '250px',
  zIndex: '999',
  height: '19px',
  width: '19px',
  color: '#91949a',
  backgroundColor: 'transparent',
  opacity: '0.5',
  border: 'none',
}