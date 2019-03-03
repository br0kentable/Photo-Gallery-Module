
import React, { Component } from 'react';

export default class ThumbnailGalllery extends Component {
  render() {
    console.log('inside the ThumbnailGallery component:', this.props)
    const gallery = this.props.galleryWindow.map((image, index) => {
      return <img key={index} src={image + `?sig=${index}`} />
    })

    return (
      <div className="photos-gallery-container">
        <h2 style={galleryHeaderStyles}> {this.props.photos} Photos</h2>
        
        <div className="photos-gallery-layout container" style={galleryContainerStyles}>
          {/* possibly below layout will be <ul> then <t> <a role="button"> <div> <img>*/}
            <a style={left1}>{gallery[0]}</a>
            <a style={left2}>{gallery[1]}</a>
            <a style={ctr}>{gallery[2]}</a> 
            <a style={right1}>{gallery[3]}</a> 
            <a style={right2}>{gallery[4]}</a> 
            <a style={right3}>{gallery[5]}</a> 
            <a style={right4}>{gallery[6]}</a> 
            <a style={right5}>{gallery[7]}</a> 
            <a style={right6}>{gallery[8]}</a> 
          
        </div>
      </div>
    )
  }
}

const galleryContainerStyles = {
  height:'350px',
  width: '690px',
  display: 'grid',
  gridTemplateColumns: '[col1] 150px [col2] 290px [col3] 98px [col4] 98px [end]',
  gridTemplateRows: '[row1] 98px [row2-right] 52px [row2-left] 46px [row3-right] 98px [end]', 
  columnGap: '5px',
  rowGap: '5px'
}

const left1 = {
  gridColumnStart: 'col1',
  gridColumnEnd: 'col2',
  gridRowStart: 'row1',
  gridRowEnd: 'row2-right'
}

const left2 = {
  gridColumnStart: 'col1',
  gridColumnEnd: 'col2',
  gridRowStart: 'row2-left',
  gridRowEnd: 'end'
}

const ctr = {
  gridColumnStart: 'col2',
  gridColumnEnd: 'col3',
  gridRowStart: 'row1',
  gridRowEnd: 'end',
  justifySelf: 'stretch'
}

const right1 = {
  gridColumnStart: 'col3',
  gridColumnEnd: 'col4',
  gridRowStart: 'row1',
  gridRowEnd: 'row2-right'
}

const right2 = {
  gridColumnStart: 'col3',
  gridColumnEnd: 'col4',
  gridRowStart: 'row2-right',
  gridRowEnd: 'row3-right'
}

const right3 = {
  gridColumnStart: 'col3',
  gridColumnEnd: 'col4',
  gridRowStart: 'row3-right',
  gridRowEnd: 'end'
}

const right4 = {
  gridColumnStart: 'col4',
  gridColumnEnd: 'end',
  gridRowStart: 'row1',
  gridRowEnd: 'row2-right'
}

const right5 = {
  gridColumnStart: 'col4',
  gridColumnEnd: 'end',
  gridRowStart: 'row2-right',
  gridRowEnd: 'row3-right'  
}

const right6 = {
  gridColumnStart: 'col4',
  gridColumnEnd: 'end',
  gridRowStart: 'row3-right',
  gridRowEnd: 'end'
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

