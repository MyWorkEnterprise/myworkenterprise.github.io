
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import jshint from 'gulp-jshint'
import uglify from 'gulp-uglify'
import browserSync from 'browser-sync'

export default function jsUtil () {
  return gulp.src('assets/js/main.js')
            .pipe(plumber())
            .pipe(jshint.reporter('default', { verbose: true }))
            .pipe(uglify())
            .pipe(gulp.dest('_site/assets/js/'))
            .pipe(browserSync.reload({
              stream: true
            }))
            .pipe(gulp.dest('assets/js/'))
}
