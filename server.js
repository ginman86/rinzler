// Require our dependencies
var app   = require('./app'),
    http  = require('http');

var port = process.env.PORT || 3000;

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
//var io = require('socket.io').listen(server);
