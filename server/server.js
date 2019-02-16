const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3001;

app.use(morgan('dev'));

app.use(express.static('../public/dist'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/menus', (req, res) => {
  console.log('I am in the get', req.body);
  //query the data base for the dog by id
  res.send(`<div>[{menu: placeholder}]</div>`)
});


app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));