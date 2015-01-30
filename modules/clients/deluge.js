var delugeAdd = require('deluge-add'),
    config = require('../../config/config'),
    delugeUrl =  config.clients.deluge.url, //'http://yourhost.com/json',
    downloadLocation = config.clients.deluge.downloadLocation; //'/path/on/deluge/server',

var credentials,
    password;

try {
  credentials = require('../../config/credentials'),
  password = credentials.clients.deluge.password;
} catch (e) {
  console.warn("Error loading the credentials file");
}


var Deluge = {
  add: function(magnet, callback) {
    console.log(delugeUrl, downloadLocation, password);
    delugeAdd(delugeUrl, password, magnet, downloadLocation, callback);
  }
};

module.exports = Deluge;

