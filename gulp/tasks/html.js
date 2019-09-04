import gulp from 'gulp'
import plumber from 'gulp-plumber'
// import replace from 'gulp-replace'
import rename from 'gulp-rename'
import ejs from 'gulp-ejs'

import config from '../config'


class Html {
    static build() {
        return gulp.src(config.html.src)
            .pipe(plumber(config.plumber))
            .pipe(ejs({}, {}, {ext: '.html'}))
            // .pipe(replace('/frontend/','./frontend/'))
            .pipe(rename({extname: '.html'}))
            .pipe(gulp.dest(config.html.dest))
    }
}


export default Html
