// Modules
// =======
import gulp from 'gulp';

// Tasks
// =====
import JekyllBuild from './gulptasks/jekyll-build';
import JekyllReload from './gulptasks/jekyll-reload';
import BrowserSync from './gulptasks/browser-sync';
import Js from './gulptasks/js';
import JsUtil from './gulptasks/js-util';
import Img from './gulptasks/img';
import Stylus from './gulptasks/stylus';

// Build the jekyll
// ================
gulp.task('jekyll-build', done => JekyllBuild(done));


// Reload the baguio
// =================
gulp.task('jekyll-reload', JekyllReload());


// Server
// ======
gulp.task('browser-sync', ['jekyll-build'], BrowserSync());


// JS task
// =======
gulp.task('js', () => Js());
gulp.task('js-util', ['js'], () => JsUtil());

// Image task
// ==========
gulp.task('img', () => Img());


// Stylus task
// ===========
gulp.task('stylus', () => Stylus());

// Watch files
// ==========
gulp.task('watch', () => {
  gulp.watch('src/styl/**/*.styl', ['stylus']);
  gulp.watch('src/js/**/*.js', ['js-util']);
  gulp.watch(['**/*.html', 'index.html', '_includes/*.html', '_layouts/*.html', '_posts/*.{md,markdown}'], ['jekyll-reload']);
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['img']);
});


// Default task
// ===========
gulp.task('default', ['js-util', 'img', 'stylus', 'browser-sync', 'watch']);
