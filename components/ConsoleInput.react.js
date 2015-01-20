/** @jsx React.DOM */

var React           = require("react");

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
      'console-input': true
    });

    return (
      <div className="console-input-container">
        <span>rinzler@127.0.0.1:~$</span><input type="text" className={classes}></input>
      </div>
    );
  }
})