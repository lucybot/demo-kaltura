'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);
  console.log('load oven');
  grunt.loadNpmTasks('lucy-oven');
  console.log('loaded');
  // Project configuration.
  grunt.initConfig({
     jsonlint: {
       sample: {
         src: [ 'cookbook.json' ]
       }
     },
     lucy_oven: {
       mediaList: {
         dest: 'test/',
         recipe: 'mediaList'
       }
     }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['lucy_oven']);
};
