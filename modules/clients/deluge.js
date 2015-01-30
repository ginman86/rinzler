var deluge_add = require('deluge-add'),
    config = require('../../config/config'),
    credentials = require('../../config/credentials'),
    deluge_url =  config.clients.deluge.url, //'http://yourhost.com/json',
    download_location = config.clients.deluge.downloadLocation, //'/path/on/deluge/server',
    password = credentials.clients.deluge.password;

var Deluge = {
  add: function(magnet, callback) {
    deluge_add(deluge_url, password, magnet, download_location, callback);
  }
};

module.exports = Deluge;

