const mongoose = require('mongoose');
const db = require('./index');
var Schema = mongoose.Schema;

const photoGallerySchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  restaurantName: String,
  photos: {
    type: [ photoSchema ], default: undefined
  }
});

const PhotoGallery = mongoose.model('PhotoGallery', photoGallerySchema);

const photoSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  urls: {
    type: [ { 
      raw: String,
      full: String,
      regular: String,
      small: String,
      thumb: String
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