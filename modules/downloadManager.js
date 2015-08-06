var _ = require('lodash')

var config = require('../config/config')
var client = require('./client')

var downloadClient,
  masterDownloader

var CATEGORIES = {
  MOVIES: 'movies',
  TV: 'tv'
}

var DownloadManager = {
  init: function () {
    var count = 0

    if (config && config.downloaders) {
      for (var downloader in config.downloaders) {
        if (config.downloaders[downloader].enabled === true) {
          count++
          if (count === 2) {
            console.warn('Multiple downloaders enabled in config,' +
              'only the first one will be used')
            break
          }
          console.log('Enabling ' + downloader + ' downloader...')
          downloadClient = require('./downloaders/' + downloader)
          masterDownloader = downloader
        }
      }
    }
  },
  findAndDownload: function (keyword, category, callback) {
    var that = this

    if (keyword) {
      this.search(keyword, category, function (magnet, err) {
        that.download(magnet, err, callback)
      })
    } else {
      console.log('No keyword supplied to search with.')
    }
  },
  downloadTop: function (category, callback) {
    var valid = false

    if (_.contains(config.downloaders[masterDownloader].categories, category)) {
      valid = true
    }

    if (valid) {
      downloadClient.top(category, function (magnet, err) {
        console.log('Top mag found: ' + magnet)
        client.add(magnet, callback)
      }.bind(this))
    }
  },
  search: function (keyword, category, callback) {
    downloadClient.search(keyword, category, callback)
  },
  download: function (magnet, err, callback) {
    if (!err) {
      client.add(magnet, callback)
    }
  }
}

DownloadManager.init()

module.exports = DownloadManager
