/** @jsx React.DOM */

var React = require("react");
var Uptime = require("./Uptime.react");

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
    <div>
      <h1> Rinzler is back. </h1>


      <Uptime ps="libexec"></Uptime>
    </div>
    );
  }
})