var db = require('../db');
var lib = require('../lib');

module.exports = {

  users: {

    fetch: (username) => {
      
    },

    post: (username) => {

    }

  },

  games: {

    fetch: () => {
      db.Game.findAll({
        attributes: ['gameName'],
        order: 'gameName ASC'
      });
    },

    post: (gameName) => {
      db.Game.create({
        gameName: gameName
      });
    }

  },

  favorites: {

    fetch: (userId) => {
     db.Favorites.findAll({
        attributes: ['gameId'],
        where: { userId: userId }
      });
    },

    post: (userId, gameId) => {
      db.Favorites.create({
        userId: userId,
        gameId: gameId
      });
    }

  }

};