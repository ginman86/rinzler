var express     = require('express'),
    exphbs      = require('express-handlebars'),
    bodyParser  = require('body-parser'),
    routes      = require('./routes'),
    sms         = require('./controllers/sms');


// Create an express instance
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Index Route
app.get('/', routes.index);

app.post('/sms', sms.receiveMessage);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

module.exports = app;