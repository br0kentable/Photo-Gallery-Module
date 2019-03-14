import React, { Component } from 'react';
import Slide from './Slide.js';



export default class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.totalImages,
      slideIndex: props.slideIndex,
      currentSlide: props.totalImages[props.slideIndex]  
    }
    console.log('passed down from Modal', props)
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  prevSlide = () => {
    if(this.state.slideIndex === 0) {
      return this.setState({
        slideIndex: this.state.images.length - 1
      })
    }
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex - 1
    }))
  }

  nextSlide = () => {
    if(this.state.slideIndex === this.state.images.length - 1) {
      return this.setState({
        slideIndex: 0
      })
    }
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1
    }));
  }

  // componentDidUpdate() {
  //   this.setState({
  //     currentSlide: this.state.images[this.state.slideIndex]
  //   })
  // }

  render() {
    console.log('inside PhotoSlider', typeof this.state.slideIndex);
    
    const slides = this.state.images.map((slide, index) => {
    
      return <Slide key={index} img={slide + `?sig=${index}`} slideIndex={this.state.slideIndex} next={this.nextSlide} prev={this.prevSlide} currentSlide={this.state.currentSlide} />
    })
    return (
      <div className="image-wrapper">
          {slides[this.state.slideIndex]}
      </div>
    )
  }
}

