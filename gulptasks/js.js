import gulp from 'gulp';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';

export default function js() {
  return gulp.src('src/js/**/*.js')
            .pipe(plumber())
            .pipe(concat('main.js'))
            .pipe(gulp.dest('assets/js/'));
}
