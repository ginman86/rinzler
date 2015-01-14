var express = require('express'),
    exphbs  = require('express-handlebars'),
    routes  = require('./routes');

// Create an express instance
var app = express();

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Index Route
app.get('/', routes.index);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

module.exports = app;