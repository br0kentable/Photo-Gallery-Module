import React from 'react';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: null,
      galleryWindow: []
    }
  }

    getPhotos() {
      let app = this;
      $.get('/api/restaurant/:id/photos', 
        function(result) {
          console.log('inside the getPhotos', result);
          let imageUrls = JSON.parse(result);
        })
    }
  
  
  
  render() {
    return (
      <div></div>
    )
  }
}

export default App;




