// Twilio Credentials
var accountSid = 'ACca9390943711d6c62d3040d325dc97b2';
var authToken = '';

//require the Twilio module and create a REST client
var twilio = require('twilio')(accountSid, authToken);

module.exports = function() {
  var sms = {
    validate: function(data) {
      return true;
    },
    receive: function(data) {
      if (this.validate(data)) {
        return true;
      } else {
        return false;
      }
    },
    sendTestMessage: function() {
      twilio.messages.create({
        to: "",
        from: "+16184778321",
        body: "test found and is now downloading"
      }, function(err, message) {
        console.log(message.sid);
      });

      return true;
    },
  }

  return sms;
}();
