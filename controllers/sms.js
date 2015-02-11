var shell           = require('../modules/shell'),
    sms             = require('../modules/sms'),
    config          = require('../config/config');

var smsController = {
  receiveMessage: function(req, res) {
    var message, from;

    if (req && req.body && req.body.Body) {
      message = req.body.Body;
      from = req.body.From;

      sms.receive(from, message, function(result) {
        console.log("Result from message, ", result);
        res.send("Completed.")
      });
    }
  }
};

module.exports = smsController;