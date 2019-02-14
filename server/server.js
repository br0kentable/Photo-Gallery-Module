const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3002;

app.use(morgan('dev'));

// app.use(express.static())


app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));