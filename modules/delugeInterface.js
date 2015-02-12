var restler = require('restler');

var  connected = false;

var DOWNLOAD_LOCATION, PASSWORD, DELUGE_URL,
    SESSION_COOKIE = "";

module.exports = function(deluge_url, password, download_location) {
    DELUGE_URL = deluge_url;
    PASSWORD = password;
    DOWNLOAD_LOCATION = download_location;

    auth(function(err, result, response) {
      if (!err) {
        SESSION_COOKIE = response.headers['set-cookie'][0].split(';')[0];;
        console.log("Authenticated with deluge server...")
        isConnected(function(err, response) {
          if (!err) {
            connected = true;
            console.log("Connected to deluge on " + deluge_url);
          }
        });
      } else {
        console.log("Problems connecting to deluge: ", err, response.error);
      }
    });

  return {
    add: function(magnet, callback) {
      if (connected) {
        console.log("Posting magnet to deluge...");
        add(magnet, callback);
      }
    }
  }
};

function auth(callback) {
  post({
    id: 1,
    params: [PASSWORD],
    method:"auth.login"
  }, callback);
}

function connect(callback) {
  post({
    method: "web.connect",
    params: [host],
    id: 2
  }, callback);
}

function isConnected(callback) {
  post({
    id: 1,
    method: "web.connected",
    params: []
  }, callback);
}

function getHosts(callback) {
  post({
    method:"web.get_hosts",
    params:[],
    id:1
  }, callback);
}

function add(magnet, callback) {
  post({
    method:"web.add_torrents",
    id: 1,
    params: [[{
      path: magnet,
      options:{
        file_priorities:[],
        add_paused:false,
        compact_allocation:false,
        download_location: DOWNLOAD_LOCATION,
        max_connections:-1,
        max_download_speed:-1,
        max_upload_slots:-1,
        max_upload_speed:-1,
        prioritize_first_last_pieces:false
      }
    }]],
  }, callback);
}

function post(body, callback) {
  restler.postJson(DELUGE_URL, body, {
    headers: {
      'Cookie': SESSION_COOKIE
    }
  })
  .on('success', function(result, response) {
    callback(result.error, result, response);
  });
}
