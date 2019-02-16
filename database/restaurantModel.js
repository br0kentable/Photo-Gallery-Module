const mongoose = require('mongoose');
const db = require('./index');

var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: String,
  cuisine: { type: String, required: true },
  menus: [{ type: Schema.Types.ObjectId, ref: 'Menu'}],
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photos'}],
  priceAvg: Number
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// // const restaurantSchema = mongoose.Schema({
// //     id:  Number,
// //     name: String,
// //     cuisine: String,
// //     menus: [
// //       { “full”: {"plate": String, "description": String, "price": Number } },
// //       { "dinner": {"plate": String, "description": String, "price": Number } },
// //       { "lunch" : {"plate": String, "description": String, "price": Number } },
// //       { “drinks”: {"drink": String, "description": String, "price": Number } }, 
// //       liquor: Boolean ],
// //     priceAvg: Number,
// //     
// // })


/*

//function to generate restaurant name
//function to generate restaurant cuisine type
//function to determine price average from menu -items






 
 
 */

 module.exports = Restaurant;