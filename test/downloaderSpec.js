var mocha       = require('mocha');
var chai        = require('chai');
var sinon       = require('sinon');
var assert      = require('assert');
var proxyquire  = require('proxyquire')

var kickass     = require('../modules/downloaders/kickass');

var downloader = proxyquire('../modules/downloader', {
  './client': {
    add: function(a,b) {
      console.log("PROXYQUIRE", a,b);
      b();
      return true;
    }
  }
});

describe('The downloader suite', function() {
  it('should be able to execute a callback passed to find and download.', function(done) {
    this.timeout(5000);
    downloader.findAndDownload("gone girl", "movies", function() {
      assert(true);
      done();
    });
  });
  describe('kickass', function() {
    // it('should fire the callback with a valid magnet link on success.', function(done) {
    //   kickass.search("gone girl", "movies", function(magnet, err) {
    //     assert(true);
    //   });
    // });
  });
});