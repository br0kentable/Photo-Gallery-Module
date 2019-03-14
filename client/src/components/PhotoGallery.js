import React from 'react';
import axios from 'axios';
import Modal from './Modal.js';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: null,
      galleryWindow: [],
      galleryPhotos: [],
      showModal: false,
      currentIndex: 0
    }
    console.log('inside the App constructor', this.state);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

    componentWillMount() {
      const app = this;
      //used the below console.log to see/get the param from  
      let id = location.pathname.split('/')[2];
      console.log('before axios, pathname', id)
      axios.get(`http://localhost:3002/api/restaurants/${id}`)
        .then(result => {
          console.log('inside willMount:', result.data[0].photos.slice(0, 9));
          app.setState({
            hero: result.data[0].heroImage,
            galleryWindow: [
              result.data[0].galleryLeft,
              result.data[0].galleryLeft,
              result.data[0].galleryCenter,
              result.data[0].galleryRight,
              result.data[0].galleryRight,
              result.data[0].galleryRight,
              result.data[0].galleryRight,
              result.data[0].galleryRight,
              result.data[0].galleryRight,
              result.data[0].galleryRight
            ],
            galleryPhotos: result.data[0].photos,
            showModal: false,
          });
        })
        .catch(err => {
          if(err) {
            console.log(err);
          }
        });
      }
 

    handleShow = () => {
      this.setState({
        showModal: !this.state.showModal
      })
    }

    handleHide = () => {
      this.setState({
        showModal: !this.state.showModal
      })
    }

    handleImageClick = (index) => {
      this.setState({
        currentIndex: index
      })
    }

    render() { 
      const gallery = this.state.galleryWindow.map((image, index) => {
        return <img key={index} src={image + `?sig=${index}`} onClick={() => this.handleImageClick(index)}/>
      })  
      const index = this.state.currentIndex;
      return (
        <div> 
          <div className="hero-banner">
            <img src={this.state.hero} onClick={this.handleShow} style={heroImageStyles}/>
          </div> 
        
        <div className="ui container" style={photosGalleryContainerStyles}>

          <h2 className="photos-gallery-header" style={galleryHeaderStyles}> {this.state.galleryPhotos.length} Photos</h2>
          
          <div className="photos-gallery-layout container" style={galleryLayoutStyles}>
              <a className="modal-open" href="#" onClick={this.handleShow} style={left1}>{gallery[0]}</a>
              <a className="modal-open" href="#" onClick={this.handleShow} style={left2}>{gallery[1]}</a>
              <a className="modal-open" href="#" onClick={this.handleShow} style={ctr}>{gallery[2]}</a> 
              <a className="modal-open" href="#" onClick={this.handleShow} style={right1}>{gallery[3]}</a> 
              <a className="modal-open" href="#" onClick={this.handleShow} style={right2}>{gallery[4]}</a> 
              <a className="modal-open" href="#" onClick={this.handleShow} style={right3}>{gallery[5]}</a> 
              <a className="modal-open" href="#" onClick={this.handleShow} style={right4}>{gallery[6]}</a> 
              <a className="modal-open" href="#" onClick={this.handleShow} style={right5}>{gallery[7]}</a> 
              <a className="modal-open" href="#" onClick={this.handleShow} style={right6}>{gallery[8]}</a>
              <button className="see more" style={right6A} onClick={this.handleShow}> + {this.state.galleryPhotos.length - 9} more</button> 
         
          </div>
        </div> 
          { this.state.showModal ? <Modal photos={this.state.galleryPhotos} gallery={this.state.galleryPhotos.slice(0, 9)}
                                          showModal={this.state.showModal} 
                                          handleHide={click => this.setState({ showModal: !this.state.showModal })} 
                                          slideIndex={this.state.currentIndex}
                                           /> : null }
        </div>
      )
    }
}


const heroImageStyles = {
  maxWidth: "1400xpx",
  height: "230px",
  backgroundSize: "cover",
  backgroundPosition: "center"
}

const photosGalleryContainerStyles = {
  display: 'block',
  height: '350px',
  width: '690px',
}

const galleryHeaderStyles = {
  height: '42px',
  width: '650px',
  marginBlockStart: '20px',
  marginBlockEnd: '16px',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '50px',
  color: '#2d333f',
  borderBottom: '1.5px solid rgb(182, 183, 185)',
  paddingBottom: '16px',
  margin: '10px 16px 16px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  textSizeAdjust: '100%'
} 

const galleryLayoutStyles = {
  width: 'calc(100% + 2px)',
  position: 'relative',
  overflow: 'hidden',
  height:'300px',
  width: '650px',
  display: 'grid',
  gridColumn: 'full-start / full-end',
  gridTemplateColumns: '[col1] 150px [col2] 290px [col3] 98px [col4] 98px [end]',
  gridTemplateRows: '[row1] 98px [row2-right] 52px [row2-left] 46px [row3-right] 98px [end]', 
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




