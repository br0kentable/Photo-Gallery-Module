import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      translateVal: 0
    }
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
    return (
      <div className="slider">

      <div className="slide-wrapper" style={{ transform: `translateX(${this.state.translateVal}px)`, transition: 'transform ease-out 0.45s'}}>   
        { this.state.images.map((image, idx) => (
            <Slide key={idx} image={image} />
          ))
        }
      </div>

        
        {/* <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow  nextSlide={this.nextSlide} /> */}
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