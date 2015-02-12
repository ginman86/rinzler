var config = require('../../config/config'),
    delugeUrl =  config.clients.deluge.url, //'http://yourhost.com/json',
    downloadLocation = config.clients.deluge.downloadLocation, //'/path/on/deluge/server',
    delugeInterface;

var credentials,
    password;

try {
  credentials = require('../../config/credentials'),
  password = credentials.clients.deluge.password;
} catch (e) {
  console.warn("Error loading the credentials file");
}

delugeInterface = require('../delugeInterface')(delugeUrl, password, downloadLocation);

var Deluge = {
  add: function(magnet, callback) {
    delugeInterface.add(magnet, callback);
  }
};

module.exports = Deluge;

