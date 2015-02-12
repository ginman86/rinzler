var restler     = require('restler');
var config      = require('../../config/config');
var cheerio     = require('cheerio');

var Bay = {
  search: function(keyword, category, callback) {
    var prefix = config.downloaders.bay.prefix,
        searchTerm = "",
        suffix = config.downloaders.bay.suffix,
        requestURI = "";

    if (keyword) {
      searchTerm = encodeURIComponent(keyword);

      requestURI = prefix + searchTerm + suffix;

      restler.get(requestURI).on("complete", function(result) {
        var $ = cheerio.load(result),
            magnet;

        try {
          magnet = $('.detName')[0].next.next.attribs.href; //ugly fugly
          console.log("Magnet found for ", searchTerm);
        } catch (e) {
          console.error("Problems grabbing magnet from search, " +
                        "page structure may have changed - ", e);
        }
        callback(magnet);
      });
    }
  }
}

module.exports = Bay;