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
  }
}