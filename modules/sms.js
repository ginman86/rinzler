var config          = require("../config/config");
var downloadManager = require("./downloadManager");
var credentials     = require("../config/credentials");
var _               = require('lodash');

//require the Twilio module and create a REST client
var twilio = require('twilio')(config.twilio.accountSid, credentials.twilio.authToken);
var handlers;

var sms = {
  validate: function(from, message) {
    var valid = false;

    if (_.contains(credentials.sms.numbers, from)) {
      valid = true;
    }

    return valid;
  },
  receive: function(from, message, callback) {
    if (this.validate(from, message)) {
      //handlers[peelType(data)]
      handlers.download(message, callback);
    } else {
      callback(true, {success: false});
    }
  },
  download: function(data, callback) {
    var keyword, category;

    keyword = data;
    console.log("Download request: ", data);
    downloadManager.findAndDownload(keyword, category, callback);
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
  }
};

handlers = {
  download: sms.download
};

module.exports = sms;