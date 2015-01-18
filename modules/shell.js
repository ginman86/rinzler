var _ = require('lodash');

require('shelljs/global');

module.exports = {
  deluged: function() {
    console.log("Running deluged ", exec("deluged"));
  },
  gitStatus: function() {
    var output;
    console.log("Running git status ");

    output = exec("git status").output;
    output = output.split('\n').join('<br/>');

    return output;
  },
  getUptime: function(ps) {
    var output = exec("ps -eo pid,time,args | grep " + ps).output,
        processes = [];

    output = output.split('\n');

    _.each(output, function(str) {
      var process;

      str = str.trim();
      str = str.split(" ");

      process = {
        pid: str[0],
        uptime: str[3],
        desc: str[4]
      };

      processes.push(process);
    })

    return processes;
  }
}