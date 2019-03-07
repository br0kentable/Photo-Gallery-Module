import React, { Component } from 'react';
import Slide from './Slide.js';
// import LeftArrow from './LeftArrow.js';
// import RightArrow from './RightArrow.js';


export default class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.totalImages,
      slideIndex: props.slideIndex,  
    }
    console.log('passed down from Modal', props)
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  prevSlide = () => {
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex - 1
    }))
  }

  nextSlide = () => {
    if(this.state.slideIndex === this.state.images.length - 1) {
      return this.setState({
        slideIndex: 0,
        translateVal: 0
      })
    }
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1,
    }));
  }

  render() {
    console.log('inside PhotoSlider', typeof this.state.slideIndex);
    const slideIdx = this.state.slideIndex;

    const slides = this.state.images.map((slide, index) => {
      return <Slide key={index} img={slide} slideIndex={this.state.slideIndex} next={this.nextSlide} prev={this.prevSlide} />
    })
    return (
      <div className="image-wrapper">
          {slides[this.state.slideIndex]}
      </div>
    )
  }
}

