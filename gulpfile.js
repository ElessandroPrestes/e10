var gulp = require('gulp');
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

//html funcionando
gulp.task('htmlmin', ()=> {
    return gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .on("error", notify.onError("Error: <%= error.message %>"))  
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream())
});

//Deixando o function automatizado.
gulp.task('default',['htmlmin'], function () {
    gulp.watch('src/index.html', ['htmlmin']);
});