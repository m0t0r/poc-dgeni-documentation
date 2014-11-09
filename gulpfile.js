var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var Dgeni = require('dgeni');

gulp.task('jshint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('dgeni', ['jshint'], function() {
  var dgeni = new Dgeni([require('./docs/config/dgeni-config.js')]);
  return dgeni.generate().catch(function(error) {
    console.error(error);
    process.exit(1);
  });
});
