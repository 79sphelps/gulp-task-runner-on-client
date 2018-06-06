/*jshint esversion: 6 */
'use strict';

var gulp = require('gulp');

var stylus = require('gulp-stylus');

var concat = require('gulp-concat');

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var wrap = require('gulp-wrap');
var jshint = require('gulp-jshint');
var jsSource = './src/assets/javascript/';

gulp.task('css', function() {
    gulp.src('./src/assets/style/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(concat('main.min.css', {
            newLine: ''
        }))
        .pipe(gulp.dest('./src/assets/css'));
        //.pipe(gulp.dest('./public/css'));
});


gulp.task('default', function() {
    gulp.start('javascript');
    gulp.start('css');
});



gulp.task('javascript', function() {
    gulp.src([
            jsSource + 'one.js',
            jsSource + 'two.js'
        ])
        .pipe(concat('main.js'))
        .pipe(wrap('(function(a, window){<%= contents %>}(angular,window));'))
        .pipe(jshint({
            predef: ['window', 'angular']
        }))
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./src/assets/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/assets/js'))
});

gulp.task('watch', function() {
    gulp.watch('./src/assets/javascript/*.js', ['javascript']);
    gulp.watch('./src/assets/style/*.styl', ['css']);
});