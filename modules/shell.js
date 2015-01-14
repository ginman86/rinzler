require('shelljs/global');

console.log("Running");

console.log("PWD: " + pwd());

exec("git status");