var gulp = require('gulp');
var jshint = require('gulp-jshint');
var bower = require('bower');
var del = require('del');
var runSequence = require('run-sequence');
var Dgeni = require('dgeni');

gulp.task('jshint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('bower', function() {
  var bowerTask = bower.commands.install();
  bowerTask.on('log', function(result) {
    console.log('bower:', result.id, result.data.endpoint.name);
  });
  bowerTask.on('error', function(error) {
    console.log(error);
  });
  return bowerTask;
});

gulp.task('clean', function(done) {
  del(['./build'], done);
});

gulp.task('assets', ['bower'], function() {
  return gulp.src('vendor/**/*')
    .pipe(gulp.dest('build/docs/lib'));
});

gulp.task('dgeni', ['jshint'], function() {
  var dgeni = new Dgeni([require('./docs/config/dgeni-config.js')]);
  return dgeni.generate().catch(function(error) {
    console.error(error);
    process.exit(1);
  });
});

gulp.task('default', ['jshint'], function(cb) {
  runSequence('clean', ['dgeni', 'assets'], cb);
});
