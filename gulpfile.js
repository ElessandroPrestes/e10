let gulp = require('gulp');
let watch = require('gulp-watch');
let pump  =  require('pump');
let concat = require('gulp-concat');
let notify = require('gulp-notify');
let css = require('gulp-clean-css');
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;


gulp.task('mincss', () =>{
  return gulp.src('assets/css/*css')
  .pipe(css())
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/css/'));
});


gulp.task('minjs', () =>{
  return gulp.src('js/index.js')
  .pipe(rename('index.min.js'))
  .pipe(uglify())
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('default',['mincss,minjs'], () => {
    gulp.watch('assets/css/*css', ['mincss']);
    gulp.watch('js/index.js', ['minjs']);
});