/**
 **
 **
 **
 **
 **
 **
 **/

var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');



//图片压缩
gulp.task('img', function (argument) {
    gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/imgs'));
});





gulp.task('html', ['clear'], function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify())) //压缩js
        .pipe(gulpif('*.css', minifyCss())) //压缩css
        .pipe(gulp.dest('build'));
});


gulp.task('clear', function () {
    gulp.src('dist/*', { read: false })
        .pipe(clean());
});

gulp.task('default', ['html', 'img']);