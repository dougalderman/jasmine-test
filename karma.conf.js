module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'angular_app/js/**/*.js',
      'angular_app/test/**/*.spec.js'
    ]
  });
};
