/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ekoterm-org-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.googleapis.com maps.gstatic.com api-maps.yandex.ru",
      // 'font-src': "'self' data: use.typekit.net",
      'connect-src': "'self'",
      'img-src': "'self' data: *.maps.yandex.net api-maps.yandex.ru placehold.it clck.yandex.ru placeholdit.imgix.net",
      'style-src': "'self' 'unsafe-inline' *.maps.yandex.net",
      'frame-src': "www.google.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
