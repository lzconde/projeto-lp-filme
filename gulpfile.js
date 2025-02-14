const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');


function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/imgs/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imgs'));
}

exports.default = gulp.parallel(images, styles);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}