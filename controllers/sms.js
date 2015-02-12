var shell           = require('../modules/shell'),
    sms             = require('../modules/sms'),
    config          = require('../config/config');

var smsController = {
  receiveMessage: function(req, res) {
    var message, from;

    if (req && req.body && req.body.Body) {
      message = req.body.Body;
      from = req.body.From;

      sms.receive(from, message, function(err, result) {
        var message;

        console.log("Result from download request: ", result);
        if (!err) {
          message = '<?xml version="1.0" encoding="UTF-8"?><Response><Message>Downloading!</Message></Response>';
        } else {
          message = '<?xml version="1.0" encoding="UTF-8"?><Response><Message>Failed!</Message></Response>';
        }

        res.send(message);
      });
    }
  }
};

module.exports = smsController;