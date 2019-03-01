import React, { Component } from 'react';

export default class ThumbnailGalllery extends Component {
  render() {
    console.log('inside the ThumbnailGallery component:', this.props.galleryWindow)
    return (
      <div className="photo-gallery-container" style={GalleryContainerStyles}>
        <h2>?? Photos</h2>

        {/* <div className="photo-gallery-left-container">
          <img src={this.props.galleryWindow[0]} />
          <img src={this.props.galleryWindow[1]} />
        </div>
        <div className="photo-gallery-center-container">
          <img src={this.props.galleryWindow[2]} />
        </div>

        <div className="photo-gallery-right-container">
          <img src={this.props.galleryWindow[3]} />
          <img src={this.props.galleryWindow[4]} />
          <img src={this.props.galleryWindow[5]} />
          <img src={this.props.galleryWindow[6]} />
          <img src={this.props.galleryWindow[7]} />
          <img src={this.props.galleryWindow[8]} />
        </div> */}
      </div>
    )
  }
}

const GalleryContainerStyles = {
  background: 'grey',
  height:'350px',
  width: '690px',
  margin: '40px auto',
  display: 'grid'
}

const galleryWindowLeftStyles = {

}

const galleryWindowCenterStyles = {

}

const galleryWindowRightStyles = {

}