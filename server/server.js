var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var PORT = process.env.PORT || 9001;

const GIANT_BOMB_API_KEY = require('../config/giantBombKey.js');
const GIANT_BOMB_URL = `http://www.giantbomb.com/api/search?api_key=${GIANT_BOMB_API_KEY}&format=json&query="overwatch"&resources=game`;

const optionsGB = {
  url: GIANT_BOMB_URL,
  headers: {
    'User-Agent': 'ReUPServer'
  }
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, allows response.body to show the retrieved information
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.get('/giantbomb/get', function(req, res) {
  console.log('Hello world from /giantbomb/get');
  console.log('GIANT BOMB API KEY:', GIANT_BOMB_API_KEY);
  request.get(optionsGB, function(error, response, body) {
    if (error) {
      console.log('ERROR GETTING RESPONSE FROM GIANT BOMB\'S API SERVER');
    } else {
      res.send(body);
    }
  });
});

app.listen(PORT, function() {
  console.log('ReUP: Express server connection established at: ', PORT);
});