import gulp from 'gulp'
import plumber from 'gulp-plumber'
import config from '../config'

export default class {
  static copy() {
    return gulp.src(config.static.src)
      .pipe(plumber(config.plumber))
      .pipe(gulp.dest(config.static.dest))
  }
}
