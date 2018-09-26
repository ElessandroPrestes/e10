var gulp = require('gulp');
var indexphp = require('gulp-htmlmin');
var style = require('gulp-sass');

//sass
gulp.task('style', function() {
   return gulp.src('src/_scss/style.scss') 
       .pipe(style({outputStyle:"compressed"}))
       .pipe(gulp.dest('dist/_css/'));
});

//php
gulp.task('indexphp', function() {
    return gulp.src('src/index.php')
        .pipe(indexphp({collapseWhitespace:true}))
        .pipe(gulp.dest('dist/_css'));
});

//Deixando o function automatizado.
gulp.task('default',['indexphp', 'style'], function () {
    gulp.watch('src/index.php', ['indexphp']);
    gulp.watch('src/_scss/style.scss', ['style']);
});