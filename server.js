const express = require('express')
const PORT = process.env.PORT || 3000;

const cors = require('cors');

const app = require('./app.js')
app.use(cors())

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.log(`App is running`)
});

