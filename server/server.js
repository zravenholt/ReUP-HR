var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const  Twitter = require('twitter');
const axios = require('axios');
const keys = require ('../config/twitter.js');


var PORT = process.env.PORT || 9001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, allows response.body to show the retrieved information
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

// app.get('/', function(req, res) {
//   console.log('res:', res);
//   res.send('Hello Database!');
// });

const client = new Twitter({
  consumer_key: keys.TWITTER_API_KEY,
  consumer_secret: keys.TWITTER_API_SECRET,
  access_token_key: keys.TWITTER_TOKEN,
  access_token_secret: keys.TWITTER_TOKEN_SECRET
});

app.get('/twitter', function(req, res) {
  client.get('search/tweets', {q: 'overwatch'}, function(error, tweets, response) {
    if(error) console.log('error in fetching tweets: ', error);
    res.send(tweets.statuses);
  });
});

app.listen(PORT, function() {
  console.log('ReUP: Express server connection established at: ', PORT);
});