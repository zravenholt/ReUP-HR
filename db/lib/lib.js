var db = require('../db');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

// hashes the password
db.User.beforeCreate(function() {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this).then(function(hash) {
    this.password = hash;
  });
});
