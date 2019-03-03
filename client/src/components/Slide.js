import React from 'react';

const Slide = ({ image }) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <div className="slide" styles={slideStyles}>
      
    </div>
  )
}




export default Slide;
