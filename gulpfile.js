var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

var src = 'public/src';
var dist = 'public/dist';

var paths = {
    js: src + '/js/*.js',
    scss: src + '/css/*.scss',
    html: src + '/**/*.html'
};

gulp.task('combine-js', function () {
    return gulp.src(paths.js)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + '/js'));
});

// sass 파일을 css 로 컴파일한다.
gulp.task('compile-sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(dist + '/css'));
});

// HTML 파일을 압축한다.
gulp.task('compress-html', function () {
    return gulp.src(paths.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(dist + '/'));
});

// 파일 변경 감지
gulp.task('watch', function () {
    gulp.watch(paths.js, ['combine-js']);
    gulp.watch(paths.scss, ['compile-sass']);
    gulp.watch(paths.html, ['compress-html']);
});

//기본 task 설정

gulp.task('compile', ['combine-js', 'compile-sass', 'compress-html']);

gulp.task('default', ['compile', 'watch']);