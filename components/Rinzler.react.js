/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
  getInitialState: function(props) {
    //do something?
    props = props || this.props;

    return {
      test: true
    };
  },
  render: function() {
    return (
    <div>
      <h1> Rinzler is back. </h1>
    </div>
    );
  }
})