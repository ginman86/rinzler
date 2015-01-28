/** @jsx React.DOM */

var React           = require("react");
var ConsoleLine     = require("./ConsoleLine.react");
var ConsoleInput    = require("./ConsoleInput.react");

var shell           = require("../modules/shell");


module.exports = React.createClass({
  getInitialState: function(props) {
    //do something?
    props = props || this.props;

    return {
      test: true
    };
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'console': true
    });

    var consoleOutput = shell.getUptime("libexec");

    var listItemNodes = consoleOutput.map(function(item) {
      return(
        <ConsoleLine output={item} />
      );
    });

    return (
      <div className={classes}>
        <div className="content">
          <pre>
            {listItemNodes}
          </pre>
        </div>
        <div>
          <ConsoleInput />
        </div>
      </div>
    );
  }
})