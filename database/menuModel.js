const mongoose = require('mongoose');
const db = require('./index');


var menuSchema = mongoose.Schema({
  menuId: Schema.Types.ObjectId,
  menuTitle: { 
    type: String, require: true
  },
  menuText: {
    type: Array
  },
  priceAvg: {
    type: Number
  } 
});


const Menu = mongoose.model('Menu', menuSchema);

module.exports = {
  Menu,
  menuSchema
};
