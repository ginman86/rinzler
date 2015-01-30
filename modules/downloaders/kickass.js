var parseString = require('xml2js').parseString;
var restler     = require('restler');
var config      = require('../../config/config');

var categories = {
  movies: "movies",
  tv: "tv"
}

var Kickass = {
  search: function(keyword, category, callback) {
    var prefix = config.downloaders.kickass.prefix,
        categoryPrefix = "",
        searchTerm = "",
        suffix = "/?field=seeders&sorder=desc&rss=1",
        requestURI = "";

    if (keyword) {
      console.log(category, categories[category])
      if(category && categories[category] != null) {
        categoryPrefix = "%20category%3A" + categories[category];
      }
      searchTerm = encodeURIComponent(keyword);

      requestURI = prefix + searchTerm + categoryPrefix + suffix;

      restler.get(requestURI).on("complete", function(result) {
        var results = parseString(result, function(err, parsed) {
          if (!err) {
            console.log("LETS TEST THE RSULT", parsed.rss.channel[0].item[0]);
          } else {
            console.log("ERR", err);
          }

        });

        callback("sommat");

      });

      console.log(requestURI);

    }
  }
}

module.exports = Kickass;