
import gulp from 'gulp'
import gIf from 'gulp-if'
import plumber from 'gulp-plumber'
import less from 'gulp-less'
import postcss from 'gulp-postcss'
import postcssEasyImport from 'postcss-easy-import'
import postcssPresetEnv from 'postcss-preset-env'
import postcssAssets from 'postcss-assets'
import cssMqpacker from 'css-mqpacker'
import cssnano from 'gulp-cssnano'
import header from 'gulp-header'
// import replace from 'gulp-replace'

import config from '../config'


class Styles {
  static build() {
    return gulp.src(config.styles.src)
      .pipe(plumber(config.plumber))
      .pipe(postcss([
        postcssEasyImport({
          extensions: ['.css', '.less'],
        }),
        postcssAssets(config.styles.postcss.assets),
        cssMqpacker({
          sort: (a, b) => a.localeCompare(b),
        }),
        postcssPresetEnv({
          stage: 0,
          features: {
            'nesting-rules': true,
            'color-mod-function': true,
            'custom-media': true,
          },
        }),
      ]))
      .pipe(less())
      // .pipe(replace('/frontend/','../'))
      .pipe(gIf(config.isProd, cssnano()))
      .pipe(gIf(config.isProd, header(config.headerCat)))
      .pipe(gulp.dest(config.styles.dest))
  }
}


export default Styles
