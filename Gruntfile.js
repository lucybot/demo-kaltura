'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
     jsonlint: {
       sample: {
         src: [ 'recipes/video_search.json' ]
       }
     },
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jsonlint']);
};
