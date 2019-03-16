var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

let PORT = 6969;
var app = express();


app.use(express.static(__dirname + '/../client/dist'));



app.get('/items', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Hidey-Ho Capt'n, we are now sailing on port ${PORT}!`);
});