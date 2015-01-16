/** @jsx React.DOM */

var React = require("react/addons");

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
    <div class="row">
      <div className="cell">{this.props.pid}</div>
      <div className="cell">{this.props.time}</div>
      <div className="cell">{this.props.description}</div>
    </div>
    );
  }
})