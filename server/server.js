const express = require('express');
const bodyParser = require('body-parser');
const { getPhotosForRestaurantId } = require('../database/photosModel');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static('../public/dist/'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/api/restaurants/:id', (req, res) => {
  const id = req.params.id;
  console.log('I am in the get', req.params);
  // getPhotosForRestaurantId(id).then(photos => {
  //   console.log(photos);
  //   res.status(200).send(JSON.stringify(photos));
  // }).catch(err => {
  //   console.log(err);
  // }) 
  getPhotosForRestaurantId(id)
});

// app.get('/api/restaurant/:id/photos', (req, res) => {
//   const id = req.params.restaurantId;
//   console.log('in the get photos', id);
 
 
// });

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`))
