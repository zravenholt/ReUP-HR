var Sequelize = require('sequelize');
var db = new Sequelize('re_up', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, { instanceMethods: {
    comparePassword: function(attemptedPassword, savedPassword, callback) {
      bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
        if (err) {
          return callback(err, null);
        }
        callback(null, isMatch);
      });
    }
  }
});

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Client', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  }, {
    instanceMethods: {
      getFullName: function() {
        return this.first_name + ' ' + this.last_name;
      }
    }
  });
};

var Game = db.define('Game', {
  gameName: Sequelize.STRING
});

// JOIN TABLE
var Favorites = db.define('Favorites');

// Creating many to many relationship between user and games via Favorites join table
User.belongsToMany(Game, { through: Favorites });
Game.belongsToMany(User, { through: Favorites });

// creates these tables in MySQL if they don't already exist.
User.sync();
Game.sync();
Favorites.sync();

module.exports.User = User;
module.exports.Game = Game;
module.exports.Favorites = Favorites;