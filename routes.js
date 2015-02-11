var JSX   = require('node-jsx').install(),
  React   = require('react'),
  Rinzler = require('./components/Rinzler.react');

module.exports = {
  index: function(req, res) {
    // Render React to a string.
    var markup = React.renderToString(
      Rinzler()
    );

    res.render('home', {
      markup: markup, // Pass rendered react markup
      shell: ""
    });
  }
};