var JSX   = require('node-jsx').install(),
  React   = require('react'),
  Rinzler = require('./components/Rinzler.react'),
  shell   = require('./modules/shell');

module.exports = {
  index: function(req, res) {
    // Render React to a string, passing in our fetched tweets
    var markup = React.renderToString(
      Rinzler()
    );

    var shellExample = shell.gitStatus();

    // Render our 'home' template
    res.render('home', {
      markup: markup, // Pass rendered react markup
      shell: shellExample
    });
  }
};