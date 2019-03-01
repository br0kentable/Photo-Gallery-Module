import React from 'react';
import $ from 'jquery';
import HeroBanner from './Hero.js';
import ThumbnailGallery from './ThumbnailGallery.js';
// import PhotoGalleryScroller from './PhotoGalleryScroller.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: `https://source.unsplash.com/collection/4239193/1450x280/?sig=${5}`,
      galleryWindow: [
        `https://source.unsplash.com/collection/4239193/145x145/?sig=${1}`,
        `https://source.unsplash.com/collection/4239193/145x145/?sig=${2}`,
        `https://source.unsplash.com/collection/4239193/290x290/?sig=${3}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${4}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${5}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${6}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${7}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${8}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${9}`
      ],

    }
    console.log('inside the App constructor', this.state);
  }

    componentWillMount() {
      let app = this;
      //used the below console.log to see/get the param from  
      console.log(window.location)
      let pathname = window.location.pathname.split('/');
      pathname = pathname[pathname.length - 1];
      $.get(`/api/restaurants/${pathname}`, 
        function(result) {
          let imageUrls = JSON.parse(result);
          console.log('inside the getPhotos', imageUrls);
          // app.setState({
          //   hero: result.heroImage
          // })
        });
    }

    getPhotos() {
      let app = this;
      $.get('/api/restaurants/:id', 
        function(result) {
          console.log('inside the getPhotos', result);
          let imageUrls = JSON.parse(result);
        })
        app.setState({
          hero: result.heroImage
        });
    }
  
        //could conditionally render the PhotoGalleryScroller based on a click and make it toggleable active
      //if not render null
    render() {
      console.log('inside the render', this.state.hero);
      return (
        <div>
          <HeroBanner heroImage={this.state.hero}/>

          <ThumbnailGallery galleryWindow={this.state.galleryWindow} />
        </div>
      )
    }
}

export default App;




