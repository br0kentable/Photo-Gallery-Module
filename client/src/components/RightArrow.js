import React from 'react'
import { Icon } from 'semantic-ui-react';

function RightArrow(props) {
  console.log('inside RightArrow :', props);
  return (
    <div className="next-img" style={nextArrowStyles}>
      <Icon link name="angle right" aria-hidden="true" onClick={()=> console.log('next please')} style={nextIconStyles}/>
    </div>
  )
}

export default RightArrow;


const nextArrowStyles = {
  position: 'absolute',
  top: '50%',
  right: '25px',
  zIndex: '999',
  height: '19px',
  width: '19px'
}

const nextIconStyles = {
  color: '#91949a',
  fontSize: '1.2rem',
  backgroundColor: 'transparent',
  fontFamily: 'icon',
  fontWeight: '700',
  top: '50%',
  height: '19px',
  width: '19px'
}
