const mongoose = require('mongoose');
const db = require('./index');

var Schema = mongoose.Schema;

const photoGallerySchema = mongoose.Schema({
  id: String,
  restaurantName: String, 
  collectionId: Number,
  photosCount: Number,
  heroImage: String,
  galleryLeft: String,
  galleryCenter: String,
  galleryRight: String,
  galleryScroller: String,
  photos: Array,
});

const PhotoGallery = mongoose.model('PhotoGallery', photoGallerySchema);


module.exports = {
  PhotoGallery,
  photoGallerySchema
}