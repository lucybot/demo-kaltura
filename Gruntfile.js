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
         recipe: 'mediaList',
         answers: {
           setup: {
             "admin_secret": "8d6cb692ab0f41bfa6bde373204c4b40",
             "partner_id": 1760921,
             "user_id": "anonymous" 
           },
           mediaList: {
             nameLike: '"Kaltura"',
             likeButton: false
           },
           videoPlayer: {
             skin: '27723522'
           }
         }
       }
     }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['lucy_oven']);
};
