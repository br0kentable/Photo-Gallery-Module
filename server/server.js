const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const menuData = require('../seed/menuSeeder');
const photosData = require('../seed/photosSeeder');

const app = express();
const PORT = 3001;

app.use(morgan('dev'));

app.use(express.static('../public/dist'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/menus', (req, res) => {
  console.log('I am in the get', req.body);

  res.send(menuData);
});

app.get('/api/photos', (req, res) => {
  console.log('in the get photos', req.body);
  res.send(photosData);
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));