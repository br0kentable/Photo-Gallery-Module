import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';


export default class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.totalImages,
      slideIndex: props.slideIndex,  
      translateVal: 0
    }
    console.log('passed down from Modal', props)
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
      // translateVal: prevState.translateVal + -(this.slideWidth())
    }));
  }

  // slideWidth = () => {
  //   return document.querySelector('.slide').clientWidth
  // }

  render() {
    console.log('inside PhotoSlider', this.state);
    const slides = this.state.images.map((slide, index) => {
      return <Slide key={index} img={slide} slideIndex={this.state.slideIndex} next={this.nextSlide} prev={this.prevSlide} />
    })
    console.log('what should appear in modal', slides[this.state.slideIndex])
    return (

      <div className="image-wrapper">
        <LeftArrow prevIndex={this.state.slideIndex -= 1} />
          {slides[this.state.slideIndex]}
        <RightArrow nextIndex={this.state.slideIndex += 1} />
      </div>
    )
  }
}

