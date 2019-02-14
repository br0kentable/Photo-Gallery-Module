const mongoose = require('mongoose');
const db = require('./index');

// const restaurantSchema = mongoose.Schema({
//     id:  Number,
//     name: String,
//     cuisine: String,
//     menus: [
//       { “full”: {"plate": String, "description": String, "price": Number } },
//       { "dinner": {"plate": String, "description": String, "price": Number } },
//       { "lunch" : {"plate": String, "description": String, "price": Number } },
//       { “drinks”: {"drink": String, "description": String, "price": Number } }, 
//       liquor: Boolean ],
//     priceAvg: Number,
//     url: String,
// })