const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getPhotosForRestaurant } = require('../controller/utility');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, '../public/dist/')))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/api/restaurants/:id', (req, res) => {
  const id = req.params.id;
  console.log('I am in the get', req.params);
  getPhotosForRestaurant(id, (err, photos) => {
    if(err) {
      throw err
    }
    res.status(200).send(JSON.stringify(photos));
  });
});

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id;
  console.log('in the get photos', id);
  console.log('path.join(__dirname', path.join(__dirname, '../public/dist'));
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
 
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`))





