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
  PhotoGallery.find({ id: id}).then(photos => {
    console.log('results: ', photos)
    callback(null, photos);
  }).catch(err => {
    console.log('err in getPhotosForRestId', err);
    callback(err);
  })
}

var updatePhotosForRestaurant = function(id, callback) {

}

var deletePhotosForRestaurant = function(id, callback) {

}



module.exports = {
  PhotoGallery,
  photoGallerySchema
}