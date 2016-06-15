module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'angular_app/lib/angular/angular.min.js',
      'angular_app/lib/angular/angular-mocks.js',
      'angular_app/js/**/*.js',
      'angular_app/test/**/*.spec.js'
    ],
    autoWatch: true,
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
    ],
  });
};
