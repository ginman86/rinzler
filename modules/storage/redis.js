var redis = require('redis');
var config = require('./config.json');

var client = redis.createClient(config.port, config.host);

client.on('connect', function() {
	console.log("Connected to " + config.host + " on " + config.port);

	// client.set('test', 'woot', function (err, reply) {
	// 	console.log(reply);
	// });

	client.get('test', function(err, reply) {
		console.log(reply);
	});
});


