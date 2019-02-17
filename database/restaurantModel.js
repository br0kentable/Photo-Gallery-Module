const mongoose = require('mongoose');
const db = require('./index');
const menuSchema = require('./menuModel');
const photoGallerySchema = require('./photosModel');

var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: String,
  cuisine: { type: String, required: true },
  menus: { type: [ menuSchema ], default: undefined },
  photos: { type: [ photoGallerySchema ], default: undefined },
  priceAvg: Number,
  servesLiquor: Boolean
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);




const createRestaurant = function(callback) {

}

const updateRestaurant = function(id, callback) {

}

const deleteRestaurant = function(id, callback) {


}


module.exports = {
  Restaurant
}
