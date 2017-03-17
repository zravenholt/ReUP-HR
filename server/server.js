var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const Twitter = require('twitter');
const axios = require('axios');
const keys = require ('../config/twitter.js');
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

const client = new Twitter({
  consumer_key: keys.TWITTER_API_KEY,
  consumer_secret: keys.TWITTER_API_SECRET,
  access_token_key: keys.TWITTER_ACCESS_TOKEN,
  access_token_secret: keys.TWITTER_TOKEN_SECRET
});



app.get('/twitter', function(req, res) {
  console.log('app.get /twitter', client);
  client.get('statuses/user_timeline', { screen_name: 'PlayOverwatch', include_rts: false }, function(error, timeline, response) {
    if(error) console.log('error in fetching tweets: ', error);
    console.log('timeline response:', timeline);
    res.send(timeline);
  });
});

app.listen(PORT, function() {
  console.log('ReUP: Express server connection established at: ', PORT);
});