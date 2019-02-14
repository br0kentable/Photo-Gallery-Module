const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/broken_table', {useNewUrlParser: true});

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error connection to the database...')
);
db.once('open', function() {
  console.log('Successfully connected to the database');
});


module.exports = db;