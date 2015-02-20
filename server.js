// Require our dependencies
var app   = require('./app'),
    http  = require('http').createServer(app),
    io    = require('socket.io')(http);

var port = process.env.PORT || 3000;

var server = http.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

io.on('connection', function(socket){
  var address = socket.handshake.address;
  console.log("Client connected. ", address);
});
