import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';

export default function Img() {
  return gulp.src('src/img/**/*.{jpg,png,gif,svg}')
            .pipe(plumber())
            .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
            .pipe(gulp.dest('_site/assets/img/'))
            .pipe(browserSync.reload({
              stream: true
            }))
            .pipe(gulp.dest('assets/img/'));
}
