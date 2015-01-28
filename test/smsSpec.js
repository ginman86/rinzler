// var mocha = require('mocha');
// var chai = require('chai');
// var sinon = require('sinon');
// var assert = require('assert');
// var sms = require('../modules/sms');

// var STUB_TEXT_MSG = "casablanca";

// describe('The sms module suite', function() {
//   it('should validate an incoming text', function(done) {
//     var spy = sinon.spy(sms, 'validate');

//     sms.receive(STUB_TEXT_MSG);

//     assert(spy.called);
//     done();
//   });
//   it('should send a test message.', function(done) {
//     var result = sms.sendTestMessage();

//     assert(result);
//     done();
//   });
// });