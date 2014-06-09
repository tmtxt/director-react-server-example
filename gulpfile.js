var gulp = require('gulp');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');

gulp.task('jsx', function(){
  gulp.src('main.jsx')
    .pipe(plumber())
    .pipe(react())
    .pipe(gulp.dest('.'));
});

gulp.task('browserify', function(){
  gulp.src('main.js')
    .pipe(plumber())
    .pipe(browserify({
      basedir: './'
    }))
    .on('prebundle', function(bundle){
      bundle.require('./main.js');
    })
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function(){
  gulp.watch('main.jsx', ['jsx']);
  gulp.watch('main.js', ['browserify']);
});
