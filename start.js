
var forever = require('forever-monitor');

var child = new (forever.Monitor)('./server.js', {
  silent: false,
  args: [],
  spinSleepTime: 2000,
  max: 500
});

child.on('exit', function () {
  console.log('Rinzler has exited.');
});

child.on('error', function (err) {
  console.log('Some error!! ', err);
});

child.on('restart', function() {
  console.log('Forever restarting for ' + child.times + ' time');
});

child.on('start', function() {
  console.log('Rinzler is now on the grid.');
});

child.start();

process.on('uncaughtException', function(err) {
  log.crit('CRASH : UncaughtException : Forever process error! ' +
    err);
  log.crit(err.stack);
  console.log('CRASH : UncaughtException : Forever process error! ' + err);
  console.log(err.stack);

  child.kill(child.killSignal);
  setTimeout(function() {process.exit(1);}, 1000);
});