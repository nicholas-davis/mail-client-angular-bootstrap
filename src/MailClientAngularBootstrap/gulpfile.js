var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var del = require('del');

//less
gulp.task('less', function () {
    gulp.src('wwwroot/assets/css/**/*.less')
     .pipe(less({
         paths: [path.join(__dirname, 'less', 'includes')]
     }))
     .pipe(gulp.dest('wwwroot/assets/css'));
});

//CSS Minification
gulp.task('min-css', function () {
    gulp.src('wwwroot/assets/global.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('wwwroot/assets/css'));
});

//clean scripts
gulp.task('clean-scripts', function () {
    return del('wwwroot/app/app.min.js');
});

//Concat and minification scripts
gulp.task('scripts', ['clean-scripts'], function () {
    gulp.src(['wwwroot/assets/lib/angular/angular.js',
        'wwwroot/assets/lib/angular-bootstrap/ui-bootstrap.js',
        'wwwroot/assets/lib/angular-ui-router/release/angular-ui-router.js',
        'wwwroot/app/**/*.js', ])
   .pipe(concat('app.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('wwwroot/app'));
});

//watchers
gulp.task('watch', function () {
    gulp.watch('wwwroot/assets/css/**/*.less', ['less']);
    gulp.watch(['wwwroot/**/*.js', '!wwwroot/app/app.min.js', '!wwwroot/app/_references.js'], ['scripts']);
})