const mongoose = require('mongoose');
const db = require('./index');

var Schema = mongoose.Schema;

const photoGallerySchema = mongoose.Schema({
  id: String,
  restaurantName: String, 
  collectionId: Number,
  photosCount: Number,
  heroImage: String,
  
  photos: {
    urls: [ photoSchema ], default: undefined
  }
});

const PhotoGallery = mongoose.model('PhotoGallery', photoGallerySchema);

const photoSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  urls: {
    type: [ { 
      heroImage: String,
      galleryLeft: String,
      galleryCenter: String,
      galleryRight: String,
      galleryScroller: String
    } ]
  }
});

const Photo = mongoose.model('Photo', photoSchema);


module.exports = {
  Photo,
  photoSchema,
  PhotoGallery,
  photoGallerySchema
}