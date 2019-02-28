const express = require('express');
const bodyParser = require('body-parser');
const { getPhotosForRestaurant, updatePhotoCollectionForRestaurant, deletePhotoForRestaurant, getPhotoGalleryForRestaurant } = require('../controller/utility');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static('../public/dist/'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/api/restaurants/:id', (req, res) => {
  const id = req.params.id;
  console.log('I am in the get', req.params);
  getPhotosForRestaurant(id, (err, photos) => {
    if(err) {
      throw err
    }
    res.status(200).send(JSON.stringify(photos));
  });
});

app.post('/api/restaurants/:id/photos', (req, res) => {
  const id = req.params.id;
  console.log('in the post photos', id);
  
  
});

app.get('/api/restaurants/:id/photos', (req, res) => {
  const id = req.params.id;
  console.log('in the get PhotoGallery', id);
  getPhotoGalleryForRestaurant(id, (err, photos) => {
    if(err) {
      throw err
    }
    res.status(200).send(JSON.stringify(photos))
  })
  
  
})


app.listen(PORT, () => console.log(`app is listening on port ${PORT}`))
