var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');
var assert = require('assert');
var proxyquire = require('proxyquire');

var client = require('../modules/client');

var deluge = proxyquire('../modules/clients/deluge', {
  'deluge-add': function(a,s,d,f) {
    console.log("Here with the Dee Oh Double Gee");
    return true;
  }
});

describe('The client suite', function() {
  describe('deluge', function() {
    it("should be able to add a torrent via magnet url", function(done) {
      deluge.add("wut wut", function(msg) {
        console.log("CALLBACK", msg);
      });
      assert(deluge.add !== undefined && typeof deluge.add === 'function');
      done();
    });
  });
});