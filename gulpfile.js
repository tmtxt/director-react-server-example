var gulp = require('gulp');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');

gulp.task('jsx', function(){
  gulp.src(['main.jsx', 'test1.jsx', 'test2.jsx'])
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
      bundle.external('react');
      bundle.require('./main.js');
    })
    .pipe(gulp.dest('public/javascripts'));
  
  gulp.src('test1.js')
    .pipe(plumber())
    .pipe(browserify({
      basedir: './'
    }))
    .on('prebundle', function(bundle){
      bundle.external('react');
      bundle.require('./test1.js');
    })
    .pipe(gulp.dest('public/javascripts'));

  gulp.src('test2.js')
    .pipe(plumber())
    .pipe(browserify({
      basedir: './'
    }))
    .on('prebundle', function(bundle){
      bundle.external('react');
      bundle.require('./test2.js');
    })
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function(){
  gulp.watch(['main.jsx', 'test1.jsx', 'test2.jsx'], ['jsx']);
  gulp.watch(['main.js', 'test1.js', 'test2.js'], ['browserify']);
});
