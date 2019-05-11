
import  gulp from 'gulp';
import watch from 'gulp-watch';
import concat from'gulp-concat';
import notify from'gulp-notify';
import css from'gulp-clean-css';
import uglify from 'gulp-uglify-es';

import rename from 'gulp-rename';

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
  //.on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('default',['mincss,minjs'], () => {
    gulp.watch('assets/css/*css', ['mincss']);
    gulp.watch('js/index.js', ['minjs']);
});