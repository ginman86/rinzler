var parseString = require('xml2js').parseString;
var restler     = require('restler');

var categories = {
  movies: "movies",
  tv: "tv"
}

var Kickass = {
  search: function(keyword, category, callback) {
    var prefix = "https://kickass.so/search/",
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
          console.log("LETS TEST THE RSULT", parsed.rss.channel[0].item[0]);
        });

        callback("sommat");

      });

      console.log(requestURI);

    }
  }
}

module.exports = Kickass;