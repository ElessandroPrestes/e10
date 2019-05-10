let gulp = require('gulp');
let watch = require('gulp-watch');
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;
let pump  =  require('pump');
let concat = require('gulp-concat');
let notify = require('gulp-notify');
let css = require('gulp-clean-css');

/*Minificando css*/
gulp.task('mincss', () =>{
  return gulp.src('assets/css/*css')
  .pipe(css())
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/css/minify/'));
});


/*Minificando JS */


//Deixando o function automatizado.
gulp.task('default',['mincss'], () => {
    gulp.watch('assets/css/*css', ['mincss']);
});