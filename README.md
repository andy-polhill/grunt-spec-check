# grunt-missing-spec

> Find and list JavaScript files that do not have corresponding specs / tests

This is a simple task to help find untested files. Code coverage tools like [Istanbul](https://gotwarlost.github.io/istanbul/)
are excellent for generating code coverage reports, however they generally do not
alert you to files which are untested. This task will simply iterate through each
file and check that there is a corresponding test case. The task can be configured
to fail the build or just provide warnings, depending on how strict you want to be.

The task will not in anyway run the JavaScript files or check that the test case even
does anything. It is a simple task to complement coverage tools by letting you know
which files are untested.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-missing-spec --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-missing-spec');
```

## The "missingSpec" task

### Overview
In your project's Gruntfile, add a section named `missingSpec` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  missingSpec: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.severity
Type: `String`
Default value: `'fatal'`

A string value that determines the severity of the failure.
Valid options are `'fatal'` (fails build) and `'warn'`

#### options.convention
Type: `String`
Default value: `'Spec.js'`

A string value that corresponds to the convention for naming your test files.
The default is the Jasmine convention where `'file.js`' is tested by `'fileSpec.js`'

The task works by replacing `'.js`' with the value provided here. So:
- `'.spec.js'` : `file.js => file.spec.js`
- `'Test.js'` : `file.js`' => `'fileTest.js`

#### options.testDir
Type: `String`
Default value: `/test`

A string value that corresponds to the location of your test files. It is assumed
that the directory structure of your test files matches that of your runtime files.

### Usage Examples

#### Default Options
In this example, we check for corresponding test cases for all JavaScript files,
and throw a fatal warning if any test cases are missing.

```js
grunt.initConfig({
  missingSpec: {
    files: {
      src: ["lib/**/*.js"]
    },
  },
});
```

#### Custom Options
In this example, we check for corresponding test cases for all JavaScript files,
our test naming convention is to use the term Test instead of spec, and we only
want to list untested files and not fail the build.

```js
grunt.initConfig({
  missingSpec: {
    options: {
      convention: "Test.js"
      severity: "warn",
      testDir: "test"
    }
    files: {
      src: ["lib/**/*.js"]
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
