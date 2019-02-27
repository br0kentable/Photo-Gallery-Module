import React, { Component } from 'react'

export default class PhotoGallery extends Component {
  render() {
    return (
      <div style={GalleryContainerStyles} className='photo-gallery-container'>
        
        <div className='left-side-container'>
          left
        </div>

        <div className='center-container'>
          center
        </div>    

        <div className='right-side-container'>
          right
        </div>
      
      
      
      </div>
    )
  }
}

const GalleryContainerStyles = {
  background: 'grey',
  height:'500px',
  width: '1024px',
  margin: '40px auto',
  display: 'grid',
  gridTemplateColumns: repeat(auto-fill, minmax())
}