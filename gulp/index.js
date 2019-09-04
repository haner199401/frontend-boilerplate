
import gulp, {src, dest, series} from 'gulp'
import RevAll from 'gulp-rev-all'
import Scripts from './tasks/scripts'
import Styles from './tasks/styles'
import Html from './tasks/html'
import Images from './tasks/images'
import Clean from './tasks/clean'
import Server from './tasks/server'
import Static from './tasks/static'

import config from './config'


gulp.task('scripts:build', Scripts.build)
gulp.task('scripts:lint', Scripts.lint)

gulp.task('styles:build', Styles.build)

gulp.task('html:build', Html.build)
gulp.task('images:build', Images.build)
gulp.task('clean', Clean.delete)
gulp.task('static:copy', Static.copy)
gulp.task('server', Server.run)

gulp.task('build', gulp.series([
  'clean',
  'images:build',
  'static:copy',
  'styles:build',
  'scripts:lint', 'scripts:build',
  'html:build',
]))

gulp.task('watch', () => {
  gulp.watch(config.styles.watch, gulp.series('styles:build'))
  gulp.watch(config.html.watch, gulp.series('html:build'))
  gulp.watch(config.scripts.watch, gulp.series('scripts:build'))
  gulp.watch(config.images.watch, gulp.series('images:build'))
})

gulp.task('default', gulp.series([
  'build',
  gulp.parallel(['watch', 'server']),
]))

gulp.task('rev', () => src([`${config.dest}**`])
  .pipe(RevAll.revision({dontRenameFile: [/^\/favicon.ico$/g, '.html']}))
  .pipe(dest(config.dest)))

gulp.task('build:prod', series(['build', 'rev']))
