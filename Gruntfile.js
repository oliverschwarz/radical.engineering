module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pgk.grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'src/css/style.css' : 'src/css/style.scss'
        }
      }
    },

    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
        },
        src: ['src/*.html']
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    },

    watch: {
      html: {
        files: ['<%= htmlhint.build.src %>'],
        tasks: ['htmlhint']
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};
