var app = require('../app');
var sms = require('../modules/sms');

app.post('/sms', sms.receive);