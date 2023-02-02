const express = require('express');
const cors = require('cors');
const path = require('path');

const videos = require('./routes/Videos.js');

const app = express();

app.use(cors());
app.use('/videos', videos)



app.listen(5000, () => {
  console.log('Listening on port 5000');
})