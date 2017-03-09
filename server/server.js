var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  console.log('res:', res);
  res.send('Hello Database!');
});

app.listen(9001, function() {
  console.log('ReUP: Express server connection established.');
});