import React from 'react';
import $ from 'jquery';
import PhotoGallery from './PhotoGallery.js';
import PhotoSlider from './PhotoSlider.js';
import Modal from './Modal.js';
import Slide from './Slide.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: null,
      galleryWindow: [],
      galleryPhotos: [],
      showModal: false,
      currentIndex: 0
    }
    // console.log('inside the App constructor', this.state);
    // this.renderSlide = this.renderSlide.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }


  
    componentWillMount() {
      let app = this;
      //used the below console.log to see/get the param from  
      // console.log(window.location)
      let pathname = window.location.pathname.split('/');
      pathname = pathname[pathname.length - 1];
      $.get(`/api/restaurants/${pathname}`, 
        function(result) {
          let imageUrls = JSON.parse(result);
          // console.log('inside the componentWillM', imageUrls);
          app.setState({
            hero: imageUrls[0].heroImage,
            galleryWindow: [
              imageUrls[0].galleryLeft,
              imageUrls[0].galleryLeft,
              imageUrls[0].galleryCenter,
              imageUrls[0].galleryRight,
              imageUrls[0].galleryRight,
              imageUrls[0].galleryRight,
              imageUrls[0].galleryRight,
              imageUrls[0].galleryRight,
              imageUrls[0].galleryRight,
              imageUrls[0].galleryRight
            ],
            galleryPhotos: imageUrls[0].photos,
            showModal: false,
  
          })
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
      // console.log('inside the App', this.state);
      return (
        <div> 
          <div className="hero-banner">
            <img src={this.state.hero} onClick={this.handleShow} style={heroImageStyles}/>
          </div> 
        
        <div className="photos-gallery-container" style={photosGalleryContainerStyles}>

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
          { this.state.showModal ? <Modal photos={this.state.galleryPhotos} gallery={this.state.galleryWindow}
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
}

const left2 = {
  gridColumnStart: 'col1',
  gridColumnEnd: 'col2',
  gridRowStart: 'row2-left',
  gridRowEnd: 'end',
  gridGap: '1px',
  rowGap: '1px', 
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

export default App;




