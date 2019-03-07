import React from 'react';
import { Icon } from 'semantic-ui-react';

function LeftArrow(props) {
  console.log('inside LeftArrow :', props);
  return (
    <div className="prev-img" style={prevArrowStyles}>
      <Icon link name="angle left" style={prevIconStyles} onClick={()=> console.log('prev please')} />
    </div>
  )
}


// const arrowButtonStyles = {
//   height: '50px',
//   width: '50px',
//   position: 'absolute',
//   display: 'block',
//   top: '50%',
//   zIndex: '999',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '16px',
//   textAlign: 'center',
//   width: '2rem',
//   cursor: 'pointer',
//   transition: 'transform ease-in .1s',
//   alignItems: 'flex-start',
//   boxSizing: 'border-box',
// }

// const backIconStyles = {
//   height: '19px',
//   width: '19px',
//   left: '25px',
//   color: '#91949a',
//   fontFamily: 'icons',
//   fontWeight: '700',
//   fontSize: '1.2rem',
//   fontVariant: 'normal',
//   top: '50%',
//   lineHeight: '1'
// }

const prevArrowStyles = {
  position: 'absolute',
  top: '50%',
  left: '25px',
  zIndex: '999',
  height: '19px',
  width: '19px'
}

const prevIconStyles = {
  color: '#91949a',
  fontSize: '1.2rem',
  backgroundColor: 'transparent',
  fontFamily: 'icon',
  fontWeight: '700',
  top: '50%',
  height: '19px',
  width: '19px'
}


export default LeftArrow;
