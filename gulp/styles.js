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

var wiredep = require('wiredep').stream;
<<<<<<< HEAD
var _ = require('lodash');

gulp.task('styles', function () {
  var sassOptions = {
    style: 'expanded'
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/**/*.scss'),
    path.join('!' + conf.paths.src, '/app/index.scss')
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };


  return gulp.src([
    path.join(conf.paths.src, '/app/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
    .pipe(browserSync.reload({ stream: true }));
});
=======

module.exports = function(options) {
  gulp.task('styles', function () {
    var sassOptions = {
      style: 'expanded'
    };

    var injectFiles = gulp.src([
      options.src + '/app/core/styles/variables.scss',
      options.src + '/app/core/styles/mixins.scss',
      options.src + '/app/core/styles/structure.scss',
      options.src + '/app/core/styles/layout.scss',
      options.src + '/app/core/styles/typography.scss',
      options.src + '/app/components/**/*.scss',
      '!' + options.src + '/app/app.scss',
      '!' + options.src + '/app/vendor.scss'
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/app/', '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    var indexFilter = $.filter('app.scss');
    var vendorFilter = $.filter('vendor.scss');

    return gulp.src([
      options.src + '/app/app.scss',
      options.src + '/app/vendor.scss'
    ])
      .pipe(indexFilter)
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(indexFilter.restore())
      .pipe(vendorFilter)
      .pipe(wiredep(options.wiredep))
      .pipe(vendorFilter.restore())
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
      .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + '/serve/app/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
>>>>>>> e8c8c0cf9c81c15387a61bc891adf244c7bafb70
