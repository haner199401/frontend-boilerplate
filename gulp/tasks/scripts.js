
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import eslint from 'gulp-eslint'
import babel from 'gulp-babel'

import config from '../config'


class Scripts {
  static build() {
    return gulp.src(config.scripts.src)
      .pipe(plumber(config.plumber))
      .pipe(babel())
      .pipe(gulp.dest(config.scripts.dest))
  }

  static lint() {
    return gulp.src(config.scripts.src)
      .pipe(eslint())
      .pipe(eslint.format())
  }
}


export default Scripts
