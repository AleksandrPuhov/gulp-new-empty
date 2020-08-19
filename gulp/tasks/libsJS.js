const gulp = require('gulp');
const concat = require('gulp-concat');

const libs = ['node_modules/swiper/swiper-bundle.min.js'];

const libsJS = () =>
    libs.length
        ? gulp
              .src(libs)
              .pipe(concat('libs.js'))
              .pipe(gulp.dest('src/assets/js/libs/'))
        : null;

module.exports = libsJS;
