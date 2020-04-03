const gulp = require('gulp');
const concat = require('gulp-concat');
let cssFiles = [
    './blocks/normalize/*.css',
    './blocks/common/*.css',
    './blocks/wrapper/*.css',
    './blocks/header/*.css',
    './blocks/line/*.css',
    './blocks/picture/*.css',
    './blocks/h1/*.css',
    './blocks/text/*.css',
    './blocks/footer/*.css',
    './blocks/footer-left/*.css'
];
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function styles () {

    return gulp.src(cssFiles)
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['>0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
        .pipe( gulp.dest('./build/style') );
}

function scripts() {

}

gulp.task('styles', styles);
gulp.task('scripts', scripts);