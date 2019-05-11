
import  gulp from 'gulp';
import watch from 'gulp-watch';
import concat from'gulp-concat-css';
import notify from'gulp-notify';
import css from'gulp-clean-css';
import uglify from 'gulp-uglify-es';
import rename from 'gulp-rename';

gulp.task('concatcss', () =>{
    return gulp.src('assets/css/*css')
    .pipe(concat("style.css"))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest('dist/css/concat/'));
});

gulp.task('mincss', () =>{
  return gulp.src('dist/css/concat/style.css')
  .pipe(rename('style.min.css'))
  .pipe(css())
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/css/minify/'));
});


gulp.task('minjs', () =>{
  return gulp.src('js/index.js')
  .pipe(rename('index.min.js'))
  .pipe(uglify())
  .on("error", notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('default',['concatcss','mincss','minjs'], () => {
    gulp.watch('assets/css/*css', ['concatcss']);
    gulp.watch('dist/css/concat/style.css', ['mincss']);
    gulp.watch('js/index.js', ['minjs']);
});