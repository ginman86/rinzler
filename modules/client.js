var config = require('../config/');
var client = require('./clients/' + config.activeClient);

var Client = {
  add: function(magnet, callback) {
    client.add(magnet, callback);
  }
};

module.exports = Client;