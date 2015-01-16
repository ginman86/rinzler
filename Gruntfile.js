/// <vs SolutionOpened='browserify, compass, responsive_images, sprite, uglify' />
/*global module */
module.exports = function (grunt) {
  'use strict';

  var loadConfig;

  var config = {
    pkg: grunt.file.readJSON('package.json')
  };

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-watch');

  loadConfig = function (path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', { cwd: path }).forEach(function (option) {
      key = option.replace(/\.js$/, '');
      object[key] = require(path + option);
    });

    for (var task in object) {
      if (task === 'copy') {
        for (var subtask in object[task]) {
          if (object[task].hasOwnProperty(subtask)) {
            grunt.registerTask(task + '-newer-' + subtask, ['newer:' + task + ':' + subtask]);
          }
        }
      }
    }
    return object;
  };

  grunt.util._.extend(config, loadConfig('./tasks/options/'));

  grunt.initConfig(config);
};