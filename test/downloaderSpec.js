var mocha       = require('mocha');
var chai        = require('chai');
var sinon       = require('sinon');
var assert      = require('assert');
var proxyquire  = require('proxyquire')

var kickass     = require('../modules/downloaders/kickass');

var downloadManager = proxyquire('../modules/downloadManager', {
  './client': {
    add: function(a,b) {
      console.log("PROXYQUIRE", a,b);
      b({success: true});
      return true;
    }
  }
});

describe('The downloader suite', function() {
  it('should be able to execute a callback passed to find and download.', function(done) {
    this.timeout(5000);
    downloadManager.findAndDownload("gone girl", "movies", function(result) {
      assert(result.success);
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