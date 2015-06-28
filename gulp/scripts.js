'use strict';

<<<<<<< HEAD
var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

=======
var gulp = require('gulp');
>>>>>>> e8c8c0cf9c81c15387a61bc891adf244c7bafb70
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

<<<<<<< HEAD
gulp.task('scripts', function () {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});
=======
module.exports = function(options) {
  gulp.task('scripts', function () {
    return gulp.src(options.src + '/app/**/*.js')
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe(browserSync.reload({ stream: true }))
      .pipe($.size());
  });
};
>>>>>>> e8c8c0cf9c81c15387a61bc891adf244c7bafb70
