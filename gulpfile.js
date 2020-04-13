const gulp = require('gulp');
const concat = require('gulp-concat');
const cssFiles = [
    './blocks/normalize/*.css',
    './blocks/fonts/*.css',
    './blocks/wrapper/*.css',
    './blocks/header/*.css',
    './blocks/line/*.css',
    './blocks/picture/*.css',
    './blocks/h1/*.css',
    './blocks/h2/*.css',
    './blocks/text/*.css',
    './blocks/social/*.css',
    './blocks/world/*.css',
    './blocks/world-part/*.css',
    './blocks/h3/*.css',
    './blocks/questions-block/*.css',
    './blocks/questions/*.css',
    './blocks/footer/*.css',
    './blocks/footer-left/*.css',
    './blocks/footer-center/*.css',
    './blocks/footer-right/*.css',
    './blocks/common/*.css',
    './blocks/arrow/*.css'
];
const jsFiles = [
    './blocks/questions/*.js'
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
        .pipe(cleanCSS({level: 0}))
        .pipe( gulp.dest('./build/style') );
}

function scripts() {

    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./build/js'));
}

gulp.task('styles', styles);
gulp.task('js', scripts);