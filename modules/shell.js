  var _ = require('lodash');

require('shelljs/global');

module.exports = {
  deluged: function() {
    console.log("Running deluged ", exec("deluged"));
  },
  gitStatus: function() {
    var output;
    console.log("Running git status ");

    output = this.formatOutput(exec("git status").output);

    return output;
  },
  getUptime: function(ps) {
    var output = exec("ps -eo pid,time,args | grep " + ps).output;

    output = this.formatOutput(output);

    return output;
  },
  formatOutput: function(output) {
    output = output.split('\n');

    return output;
  }
};