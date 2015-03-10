/*
 * grunt-missing-spec
 * https://github.com/andypolhill/grunt-missing-spec
 *
 * Copyright (c) 2015 Andrew Polhill
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    missingSpec: {
      default_all_tested: {
        options: {
          testDir: 'test/fixtures/all_tested_spec_format/test'
        },
        files: {
          src: ['test/fixtures/all_tested_spec_format/lib/**/*.js']
        }
      },
      default_missing_test: {
        options: {
          testDir: 'test/fixtures/missing_test_spec_format/test'
        },
        files: {
          src: ['test/fixtures/missing_test_spec_format/lib/**/*.js']
        }
      },
      default_all_tested_test_format: {
        options: {
          convention: 'Test.js',
          testDir: 'test/fixtures/all_tested_test_format/test'
        },
        files: {
          src: ['test/fixtures/all_tested_test_format/lib/**/*.js']
        }
      },
      default_all_tested_sub_extension_format: {
        options: {
          convention: '.spec.js',
          testDir: 'test/fixtures/all_tested_sub_extension_format/test'
        },
        files: {
          src: ['test/fixtures/all_tested_sub_extension_format/lib/**/*.js']
        }
      },
      warn_severity_missing_test: {
        options: {
          testDir: 'test/fixtures/missing_test_spec_format/test',
          severity: 'warn'
        },
        files: {
          src: ['test/fixtures/missing_test_spec_format/lib/**/*.js']
        }
      },
      default_individual_tested_file: {
        options: {
          testDir: 'test/fixtures/all_tested_spec_format/test'
        },
        files: {
          src: ['test/fixtures/all_tested_spec_format/lib/tested.js']
        }
      },
      default_exclude_missing_test: {
        options: {
          testDir: 'test/fixtures/missing_test_spec_format/test'
        },
        files: {
          src: [
            'test/fixtures/missing_test_spec_format/lib/**/*.js',
            '!test/fixtures/missing_test_spec_format/lib/another.js',
          ]
        }
      },
      invalid_severity: {
        options: {
          severity: 'log',
          testDir: 'test/fixtures/missing_test_spec_format/test'
        },
        files: {
          src: ['test/fixtures/missing_test_spec_format/lib/**/*.js']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
