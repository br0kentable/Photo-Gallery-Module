import React from 'react';

const PhotoGallery = (props) => {
  console.log('inside the PhotoGallery', props);
  return (
    <div className="photos-gallery-container" style={photosGalleryContainerStyles}>

      <h2 className="photos-gallery-header" style={galleryHeaderStyles}> photos={props.photos} Photos</h2>
    
      <div className="photos-gallery-layout container" style={galleryLayoutStyles}>
          <a className="modal-open" href="#" onClick={props.handleShow} style={left1}>{this.props.gallery[0]}</a>
          <a className="modal-open" href="#" onClick={props.handleShow} style={left2}>{gallery[1]}</a>
          <a className="modal-open" href="#" onClick={props.handleShow} style={ctr}>{gallery[2]}</a> 
          <a className="modal-open" href="#" onClick={props.handleShow} style={right1}>{gallery[3]}</a> 
          <a className="modal-open" href="#" onClick={props.handleShow} style={right2}>{gallery[4]}</a> 
          <a className="modal-open" href="#" onClick={props.handleShow} style={right3}>{gallery[5]}</a> 
          <a className="modal-open" href="#" onClick={props.handleShow} style={right4}>{gallery[6]}</a> 
          <a className="modal-open" href="#" onClick={props.handleShow} style={right5}>{gallery[7]}</a> 
          <a className="modal-open" href="#" onClick={props.handleShow} style={right6}>{gallery[8]}</a>
          <button className="see more" style={right6A} onClick={props.handleShow}> + {this.state.galleryPhotos.length - 9} more</button>     
      </div>
    </div>
  )
}


const photosGalleryContainerStyles = {
  display: 'block',
  height: '350px',
  width: '690px'
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

const galleryLayoutStyles = {
  height:'300px',
  width: '650px',
  display: 'grid',
  gridColumn: 'full-start / full-end',
  gridTemplateColumns: '[col1] 150px [col2] 290px [col3] 98px [col4] 98px [end]',
  gridTemplateRows: '[row1] 98px [row2-right] 52px [row2-left] 46px [row3-right] 98px [end]', 
  gridGap: '1px',
  columnGap: '1px',
  rowGap: '1px'
}


const left1 = {
  gridColumnStart: 'col1',
  gridColumnEnd: 'col2',
  gridRowStart: 'row1',
  gridRowEnd: 'row2-left',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const left2 = {
  gridColumnStart: 'col1',
  gridColumnEnd: 'col2',
  gridRowStart: 'row2-left',
  gridRowEnd: 'end',
  gridGap: '1px',
  rowGap: '1px', 
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const ctr = {
  gridColumnStart: 'col2',
  gridColumnEnd: 'col3',
  gridRowStart: 'row1',
  gridRowEnd: 'end',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
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

const right6A = {
  gridColumnStart: 'col4',
  gridColumnEnd: 'end',
  gridRowStart: 'row3-right',
  gridRowEnd: 'end',
  color: '#fff',
  background: 'transparent'
}






export default PhotoGallery;