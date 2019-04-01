var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var pump  =  require('pump');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

/*Minificando JS */
gulp.task('minifyJS', function (){
  return pipeline(
    gulp.src('js/index.js'),
    uglify(),
    gulp.dest('dist/js/')
  )
});

//Deixando o function automatizado.
gulp.task('default',['minifyJS'],function () {
    gulp.watch('src/js/index.js', ['minifyJS']);
});