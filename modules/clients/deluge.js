var config = require('../../config/config'),
    delugeUrl =  config.clients.deluge.url, //'http://yourhost.com/json',
    downloadLocation = config.clients.deluge.downloadLocation, //'/path/on/deluge/server',
    deluge;

var credentials,
    password;

try {
  credentials = require('../../config/credentials'),
  password = credentials.clients.deluge.password;
} catch (e) {
  console.warn("Error loading the credentials file");
}

deluge = require('deluge')(delugeUrl, password, downloadLocation);

var Deluge = {
  add: function(magnet, callback) {
    deluge.add(magnet, callback);
  }
};

module.exports = Deluge;

