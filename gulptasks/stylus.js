
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import browserSync from 'browser-sync'
import stylus from 'gulp-stylus'
import rupture from 'rupture'
import koutoSwiss from 'kouto-swiss'
import prefixer from 'autoprefixer-stylus'

export default function Stylus () {
  return gulp.src('src/styl/main.styl')
            .pipe(plumber())
            .pipe(stylus({
              use: [
                koutoSwiss(),
                prefixer(),
                rupture()
              ],
              compress: true
            }))
            .pipe(gulp.dest('_site/assets/css/'))
            .pipe(browserSync.reload({
              stream: true
            }))
            .pipe(gulp.dest('assets/css'))
}
