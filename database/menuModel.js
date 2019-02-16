const mongoose = require('mongoose');
const db = require('./index');

var Schema = mongoose.Schema;

var menuSchema = new Schema({
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  fullMenu: [ { menuType: String, 
                  items: [{ dishName: String,
                           description: String,
                           price: Number }] ,
  }]
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
