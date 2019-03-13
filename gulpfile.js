var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pump  =  require('pump');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');

//browserSync funcionando
gulp.task('browser-sync', function() {
    browserSync.init({
        server:{
        	baseDir:"src/"
        }  
    })
});

/*Concatenando e minificando JS.
gulp.task('jsmin', function(){
    gulp.src([
        'src/_js/jquery.js',
        'src/_js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .on("error", notify.onError("Error: <%= error.message %>")) 
        .pipe(gulp.dest('./dist/_js/'))
        .pipe(browserSync.stream())
});
*/

/*Minificando JS

gulp.task('minifyJS', function (cb) {
  pump([
        gulp.src('src/_js/*.js'),
        uglify(),
        .on("error", notify.onError("Error: <%= error.message %>")),
        gulp.dest('dist/_js/'),
        .pipe(browserSync.stream())
    ],
    cb
  );
});

*/
//html funcionando
gulp.task('htmlmin', ()=> {
    return gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .on("error", notify.onError("Error: <%= error.message %>"))  
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream())
});

//Deixando o function automatizado.
gulp.task('default',['htmlmin'],function () {
    gulp.watch('src/index.html', ['htmlmin']);
  //  gulp.watch('src/_js/*.js', ['minifyJS']);
});