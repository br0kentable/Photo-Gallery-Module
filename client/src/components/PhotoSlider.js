import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';


export default class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.totalImages,
      index: props.slideIndex,  
      translateVal: 0
    }
    console.log('passed down from Modal', props)
  }





  // prevSlide = () => {
  //   this.setState(prevState => ({
  //     currentIndex: prevState.currentIndex - 1
  //   }))
  // }


  // nextSlide = () => {
  //   if(this.state.currentIndex === this.state.images.length - 1) {
  //     return this.setState({
  //       currentIndex: 0,
  //       translateVal: 0
  //     })
  //   }

  //   this.setState(prevState => ({
  //     currentIndex: prevState.currentIndex + 1,
  //     translateVal: prevState.translateVal + -(this.slideWidth())
  //   }));
  // }

  // slideWidth = () => {
  //   return document.querySelector('.slide').clientWidth
  // }

  render() {
    console.log('inside PhotoSlider', this.state);
    const slides = this.state.images.map((slide, index) => {
      return <Slide key={index} img={slide} />
    })
    console.log('what should appear in modal', slides[this.state.index])
    return (

      <div className="image-wrapper">
          {slides[this.state.index]}
      </div>

        

    )
  }
}

const arrowStyles = {
  height: '50px',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform ease-in .1s'
}