/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'importBootstrapTheme': true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  // app.import({
  //   development: 'bower_components/bootstrap/dist/css/bootstrap.css',
  //   production:  'bower_components/bootstrap/dist/css/bootstrap.min.css'
  // });
  // app.import({
  //   development: 'bower_components/bootstrap/dist/css/bootstrap-theme.css',
  //   production:  'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
  // });
  // // app.import({
  // //   development: 'bower_components/bootstrap/dist/js/bootstrap.js',
  // //   production:  'bower_components/bootstrap/dist/js/bootstrap.min.js'
  // // });

  // app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/js/collapse.js');
  app.import('bower_components/bootstrap/js/carousel.js');
  // app.import('bower_components/bootstrap/js/tab.js');
  // app.import('bower_components/bootstrap/js/tooltip.js');
  // app.import('bower_components/bootstrap/js/popover.js');

  return app.toTree();
};
