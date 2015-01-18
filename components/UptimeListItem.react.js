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
    <div className="line">
      {this.props.pid}
      {this.props.time}
      {this.props.description}
    </div>
    );
  }
})