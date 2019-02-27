import React from 'react';
import $ from 'jquery';
import HeroBanner from './hero.js';
import PhotoGallery from './photoGallery.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: `https://source.unsplash.com/collection/4239193/1450x280/?sig=${5}`,
      galleryWindow: [
        `https://source.unsplash.com/collection/4239193}/145x145/?sig=${7}`,
        `https://source.unsplash.com/collection/4239193/290x290/?sig=${8}`,
        `https://source.unsplash.com/collection/4239193/98x98/?sig=${9}`,
        `https://source.unsplash.com/collection/4239193/400x400/?sig=${1}`,
        `https://source.unsplash.com/collection/4239193/400x400/?sig=${2}`,
        `https://source.unsplash.com/collection/4239193/400x400/?sig=${3}`,
        `https://source.unsplash.com/collection/4239193/400x400/?sig=${4}`,
        ]
    }
    console.log('inside the App constructor', this.state);
  }

    getPhotos() {
      let app = this;
      $.get('/api/restaurant/:id/photos', 
        function(result) {
          console.log('inside the getPhotos', result);
          let imageUrls = JSON.parse(result);
        })
        app.setState({
          hero: result.heroImage
        });
    }
  
  
    render() {
      console.log('inside the render', this.state.hero);
      return (
        <div>
          <HeroBanner heroImage={this.state.hero}/>
        </div>
      )
    }
}

export default App;




