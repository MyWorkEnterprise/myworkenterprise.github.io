
'use strict';

const cp = require('child_process'),
      gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync'),
      imagemin = require('gulp-imagemin'),
      jshint = require('gulp-jshint'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      stylus = require('gulp-stylus'),
      rupture =  require('rupture'),
      koutoSwiss = require('kouto-swiss'),
      prefixer = require('autoprefixer-stylus');

/**
 * Build the jekyll
 */
gulp.task('jekyll-build', (done) => {
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' })
            .on('close', done);
});

/**
 * Reload the baguio
 */
gulp.task('jekyll-reload', ['jekyll-build'], () => {
    browserSync.reload();
});

/**
 * Server
 */
gulp.task('browser-sync', ['jekyll-build'], () => {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


/**
 * JS task
 */
gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
            .pipe(plumber())
            .pipe(concat('main.js'))
            .pipe(gulp.dest('assets/js/'));
});

gulp.task('js-util', ['js'], () => {
  return gulp.src('assets/js/main.js')
            .pipe(plumber())
            .pipe(jshint())
            .pipe(uglify())
            .pipe(gulp.dest('_site/assets/js/'))
            .pipe(browserSync.reload({
              stream: true
            }))
            .pipe(gulp.dest('assets/js/'));
});


/**
 * Image task
 */
gulp.task('img', () => {
  return gulp.src('src/img/**/*.{jpg,png,gif,svg}')
            .pipe(plumber())
            .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
            .pipe(gulp.dest('_site/assets/img/'))
            .pipe(browserSync.reload({
              stream: true
            }))
            .pipe(gulp.dest('assets/img/'));
});

/**
 * Stylus task
 */
gulp.task('stylus', () => {
  return gulp.src('src/styl/main.styl')
            .pipe(plumber())
            .pipe(stylus({
  	         use:[koutoSwiss(), prefixer(), rupture()],
  	         compress: true
            }))
            .pipe(gulp.dest('_site/assets/css/'))
            .pipe(browserSync.reload({
               stream: true
            }))
            .pipe(gulp.dest('assets/css'));
});


/**
 * Watch files
 */
gulp.task('watch', () => {
  gulp.watch('src/styl/**/*.styl', ['stylus']);
  gulp.watch('src/js/**/*.js', ['js-util']);
  gulp.watch(['**/*.html', 'index.html', '_includes/*.html', '_layouts/*.html', '_posts/*.{md,markdown}'], ['jekyll-reload']);
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['img']);
});


/**
 * Default task
 */
gulp.task('default', ['js-util', 'img', 'stylus', 'browser-sync', 'watch']);
