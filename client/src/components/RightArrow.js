import React from 'react'
// import { Arrow } from 'semantic-ui-react';



const RightArrow = (props) => {
  console.log('inside RightArrow :', props);
  return (
    <div className="next-img" onClick={props.nextSlide}>
      <i class="fal fa-angle-right" aria-hidden="true"></i>
    </div>
  )
}

export default RightArrow;


const nextArrowStyles = {
  position: 'absolute',
  top: '50%',
  right: '25px',
  zIndex: '999'
}

