import React from 'react'

const LeftArrow = (props) => {
  console.log('inside LeftArrow :', props);
  return (
    <div className="prev-img" onClick={props.prevSlide}>
     ]<i class="fal fa-angle-left" aria-hidden="true"></i>
    </div>
  )
}

const backArrowStyles = {
  position: 'absolute',
  top: '50%',
  right: '25px',
  zIndex: '999'
} 


export default LeftArrow;
