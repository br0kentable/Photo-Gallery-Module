import React, { Component } from 'react';


export default class ThumbnailGalllery extends Component {
  render() {
    console.log('inside the ThumbnailGallery component:', this.props)
    const left = this.props.galleryWindow.slice(0, 2);
    const center = this.props.galleryWindow[2];
    const right = this.props.galleryWindow.slice(4);
    
    return (
      <div className="photos-gallery-container">
        <h2 style={galleryHeaderStyles}> {this.props.photos} Photos</h2>
        
        <div className="photos-gallery-layout container" style={galleryContainerStyles}>
          {/* possibly below layout will be <ul> then <t> <a role="button"> <div> <img>*/}
          <div className="photos-gallery-left-grid-container" style={galleryLeftGridStyles}>
            {left.map((image, index) => {
              return <img key={index} src={image} />
            })}
          </div>
          <div className="photo-gallery-center-grid-container" style={galleryCenterGridStyles}>
            {/* center */}
            <img src={center} />
            
          </div>
          <div className="photo-gallery-right-grid-container" style={galleryRightGridStyles}>
            {/* right */}
            {right.map((image, index) => {
              return <img key={index} src={image} />
            })}

          </div>
        </div>
      </div>
    )
  }
}

// const galleryContainerStyles = {
//   height:'350px',
//   width: '690px',
//   display: 'grid'
// }

const galleryContainerStyles = {
  height:'350px',
  width: '690px',
  display: 'flex'
}

const galleryLeftGridStyles = {
  display: 'grid',

}

const galleryCenterGridStyles = {
  flex: 1
}

const galleryRightGridStyles = {
  flex: 1
}

const galleryHeaderStyles = {
  height: '42px',
  width: '608px',
  marginBlockStart: '0.83em',
  marginBlockEnd: '0.83em',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '32px',
  color: '#2d333f',
  borderBottom: '1px solid #d8d9db',
  paddingBottom: '16px',
  margin: '0 0 5px 0',
  display: 'flex',
  justifyContent: 'space-between'
}