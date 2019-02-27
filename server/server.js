const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const menuData = require('../seed/menuSeeder');
// const photosData = require('../seed/photosSeeder');
const PhotoGallery = require('../database/photosModel');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));

app.use(express.static('../public/dist'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/restaurant/:id', (req, res) => {
  console.log('I am in the get', req.body);

  res.send(menuData);
});

app.get('/api/restaurant/:id/photos', (req, res) => {
  console.log('in the get photos', req.body);
  const id = req.params.restaurantId;
  PhotoGallery.findById(id).then(photos => {
    console.log(photos);
  }).catch(err => {
    console.log(err);
  })
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
