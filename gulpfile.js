var gulp = require('gulp');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var clean = require('gulp-clean');

// Transform jsx files to js files for Tern to show suggestion
gulp.task('jsx', function(){
  gulp.src(['main.jsx', 'test1.jsx', 'test2.jsx'])
    .pipe(plumber())
    .pipe(react())
    .pipe(gulp.dest('.'));
});

// Browserify npm packages
gulp.task('browserify-lib', function(){
  var b = browserify();
  b.require('react');
  b.bundle()
    .pipe(source('react.js'))
    .pipe(gulp.dest('./public/javascripts'));

  b = browserify();
  b.require('director');
  b.bundle()
    .pipe(source('director.js'))
    .pipe(gulp.dest('./public/javascripts'));
});

// Browserify modules
gulp.task('browserify-modules', ['jsx'], function(){
  var b = browserify();
  b.add('./main.js');
  b.external(require.resolve('react', {expose: 'react'}));
  b.require('./main.js');
  b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/javascripts/'));

  b = browserify();
  b.add('./test1.js');
  b.external(require.resolve('react', {expose: 'react'}));
  b.require('./test1.js');
  b.bundle()
    .pipe(source('test1.js'))
    .pipe(gulp.dest('./public/javascripts/'));

  b = browserify();
  b.add('./test2.js');
  b.external(require.resolve('react', {expose: 'react'}));
  b.require('./test2.js');
  b.bundle()
    .pipe(source('test2.js'))
    .pipe(gulp.dest('./public/javascripts/'));
});

// Clean
gulp.task('clean', function(){
  return gulp.src(['main.js', 'test1.js', 'test2.js'], {read: false})
  .pipe(clean());
});

// Watching
gulp.task('watch', function(){
  gulp.watch(['main.jsx', 'test1.jsx', 'test2.jsx'], ['jsx']);
  gulp.watch(['main.js', 'test1.js', 'test2.js'], ['browserify-modules']);
});
