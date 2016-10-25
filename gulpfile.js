'use strict';

/**
 * including plugins and libs
 */
var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');


/**
 * build files in a string
 * @type {string[]}
 */
var buildFiles = {
    js: [
        'angular-fullpage.js'
    ],
    css: [
        'jquery.fullpage.css'
    ]
};


/**
 * default task to build
 */
gulp.task('default', ['clean', 'js', 'css']);


/**
 * Clean task
 */
gulp.task('clean', function () {
    return del.sync([
        '*.min.js',
        '*.map',
        './dist'
    ]);
});

/**
 * js build
 */
gulp.task('js', function () {
    return gulp.src(buildFiles.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('angular-fullpage.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('css', function () {
    return gulp.src(buildFiles.css)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('angular-fullpage.css.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

