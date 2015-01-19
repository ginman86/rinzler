/** @jsx React.DOM */

var React = require("react");
var Uptime = require("./Uptime.react");
var Console = require("./Console.react");

module.exports = React.createClass({
  getInitialState: function(props) {
    //do something?
    props = props || this.props;

    return {
      uptimePs: "sublime"
    };
  },
  setUptimePs: function() {
    this.setState({uptimePs: "sublime"});
  },
  render: function() {
    return (
    <div className="rinzler-app">
      <h1 className="header"> rinzler </h1>


      <Console />
    </div>
    );
  }
})