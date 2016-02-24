
gulp.task 'styles_build', ->
    gulp.src(config.styles.src.main)
        .pipe($.plumber())
        .pipe($.stylus(
            'use': $.svgStylus()
        ))
        .pipe($.base64(
            extensions: ['woff']
            maxImageSize: 1024 * 1024 * 10 # 10 mb
        ))
        .pipe($.cssUrlAdjuster(
            replace: ['../img/', '../../app/frontend/img/']
        ))
        .pipe($.base64(
            extensions: ['png', 'svg', 'jpg']
            maxImageSize: 30 * 1024 # 30 kb
        ))
        .pipe($.cssUrlAdjuster(
            replace: ['../../app/frontend/img/','../img/']
        ))
        .pipe($.autoprefixer(config.styles.autoprefixer))
        .pipe($.cssnano()) # поковырять настройки https://github.com/ben-eb/cssnano
        .pipe($.header(config.headerCat, config.version))
        .pipe(gulp.dest(config.styles.dest))

    gulp.src(config.styles.src.fonts)
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.base64(
            extensions: ['woff']
            maxImageSize: 1024 * 1024 * 10 # 10 mb
        ))
        .pipe($.autoprefixer(config.styles.autoprefixer))
        .pipe($.cssnano(
            discardUnused:
                fontFace: false
        ))
        .pipe(gulp.dest(config.styles.dest))