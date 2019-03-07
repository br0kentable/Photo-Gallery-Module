import React from 'react';

const Slide = (props) => {
  console.log('inside a Slide', props);
  return (
    <div>
        <img src={props.img} />
    </div>
  )
}

export default Slide;
