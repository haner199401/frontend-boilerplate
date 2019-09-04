import gulp from 'gulp'
import config from '../config'
import plumber from 'gulp-plumber'

export default class {
  static copy() {
    return gulp.src(config.static.src)
      .pipe(plumber(config.plumber))
      .pipe(gulp.dest(config.static.dest))
  }
}
