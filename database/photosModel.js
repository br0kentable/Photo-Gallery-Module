const mongoose = require('mongoose');
const db = require('./index');

var Schema = mongoose.Schema;

const photoGallerySchema = Schema({
  id: String,
  restaurantName: String, 
  heroImage: String,
  galleryLeft: String,
  galleryCenter: String,
  galleryRight: String,
  galleryScroller: String,
  photos: Array,
});

var PhotoGallery = mongoose.model('PhotoGallery', photoGallerySchema);

var getPhotosForRestaurantId = function(id, callback) {
//   PhotoGallery.find({ id: 'bawwPutK8j'}).then(data => {
//   console.log('results: ', data);
// }).then(photos => {
//     console.log('inside the getAllPhotos', photos);
//     callback(null, photos);
//   }).catch(err => {
//     console.log('inside the getAllPhotos', err);
//     callback(err);
//   })
  PhotoGallery.find({ id: 'bawwPutK8j'}).then(data => {
    console.log('results: ', data);
  })
}

// PhotoGallery.find({ id: 'bawwPutK8j'}).then(data => {
//   console.log('results: ', data);
// })

module.exports = {
  PhotoGallery,
  photoGallerySchema,
  getPhotosForRestaurantId
}