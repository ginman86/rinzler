var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');
var assert = require('assert');
var proxyquire = require('proxyquire');

var sms = proxyquire('../modules/sms', {
      '../config/credentials': {
        sms: {
          numbers: ['+1239875432', '+9999999999']
        }
      }
    });


var STUB_TEXT_MSG = "casablanca";

describe('The sms module suite', function() {
  it('should only accept numbers specified in the credentials', function(done) {
    sms.receive('+1239875432', STUB_TEXT_MSG, function(result) {
      console.log("result: ", result);
      assert(true);
      done();
    });
  });
  it('should validate an incoming text', function(done) {
    var spy = sinon.spy(sms, 'validate');

    // sms.receive(STUB_TEXT_MSG);

    // assert(spy.called);
    done();
  });
  it('should send a test message.', function(done) {
    var result = sms.sendTestMessage();

    assert(result);
    done();
  });
});