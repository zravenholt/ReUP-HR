var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

app.get('/reddit/get', function(req, res) {
  console.log('reddit res:', res);
  res.send('Hello Reddit!');
});

app.get('/yt/get', function(req, res) {
  console.log('yt res:', res);
  res.send('Hello Youtube!');
});

app.get('/ign/get', function(req, res) {
  console.log('ign res:', res);
  res.send('Hello IGN!');
});

app.listen(9001, function() {
  console.log('ReUP: Express server connection established.');
});