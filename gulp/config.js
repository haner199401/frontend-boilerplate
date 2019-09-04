
import imageminPngquant from 'imagemin-pngquant'
import util from 'gulp-util'
import yargs from 'yargs'


const headerCat = `
/*!
 *                  $$___我是猪洋___$$
 *                  $___$________$___$
 *                  $_____$$$$$$_____$
 *                 $_____sss___sss____$
 *                $______ii_____ii_____$
 *                 $_______$$$________$
 *     $$$$$$$$     $_______$________$
 *   $$________$       $$_________$$
 *    $_________$     $___$$$$$___$
 *       $______$    $__$___佛____$__$
 *       $_____$    $__$____祖_____$__$
 *      $____$   $$$$__$____保____$__$$$$
 *     $___$    $____$__$___佑___$___$___$
 *     $__$     $____$__$___!____$__$____$
 *    $___$      $____$__$____$_$__$____$
 *      $__$      $____$___$_$_____$___$
 *       $___$$$$$_$___$___$_$____$___$
 *          $$$$$_$____$____$_____$____$
 *                $$$_$_____$______$_$$$
 *                     $$$$___$$$$$
 */
`;

function errorHandler(err) {
  util.log([(`${err.name} in ${err.plugin}`).bold.red, '', err.message, ''].join('\n'))
  if (util.env.beep) {
    util.beep()
  }
  this.emit('end')
}

const path = {
  src: 'source/',
  dest: 'app/',
}

const config = {
  isProd: yargs.boolean('prod').argv.prod,
  headerCat,
  src: path.src,
  dest: path.dest,
  plumber: {
    errorHandler,
  },
  styles: {
    src: `${path.src}styles/*.less`,
    dest: `${path.dest}/styles/`,
    watch: `${path.src}styles/**/*.less`,
    postcss: {
      assets: {
        loadPaths: [
          `${path.dest}/image`,
        ],
        relative: true,
        cache: true,
        cachebuster: true,
      }
    },
    less: {

    },
  },
  html: {
    src: `${path.src}templates/*.ejs`,
    dest: path.dest,
    watch: [
      `${path.src}**/*.ejs`,
    ],
  },
  scripts: {
    src: {
      main: `${path.src}scripts/index.js`,
      all: `${path.src}scripts/**/*.js`,
    },
    dest: `${path.dest}scripts/`,
    watch: `${path.src}scripts/**/*.js`,
  },
  images: {
    src: `${path.src}images/**/*`,
    dest: `${path.dest}images/`,
    watch: `${path.src}images/**/*`,
    imagemin: {
      progressive: true,
      interlaced: true,
      svgoPlugins: [
        {cleanupIDs: false},
        {removeViewBox: false},
      ],
      use: [imageminPngquant()],
    },
  },
}


export default config
