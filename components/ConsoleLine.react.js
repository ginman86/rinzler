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
    var cx = React.addons.classSet;

    var classes = cx({
      'console-line':true
    });

    return (
      <div>
        {this.props.output}
      </div>
    );
  }
})