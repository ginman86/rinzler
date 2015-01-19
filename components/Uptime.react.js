/** @jsx React.DOM */

var React           = require("react");
var UptimeListItem  = require("./UptimeListItem.react");
var shell           = require("../modules/shell");


module.exports = React.createClass({
  getInitialState: function(props) {
    //do something?
    props = props || this.props;

    return {
      test: true
    };
  },
  getUptimes: function() {
    var uptimes = shell.getUptime(this.props.ps);

    return uptimes;
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'test-class': true
    });

    var uptimes = this.getUptimes();
    var listItemNodes = uptimes.map(function(item) {
      return(
        <UptimeListItem className={classes} pid={item.pid} time={item.uptime} description={item.desc} />
      );
    });
    return (
    <div className="uptime-container">
      <div className="">
        executing...
      </div>
      <div className="">
        pid
        uptime
        desc
      </div>
      {listItemNodes}
    </div>
    );
  }
})