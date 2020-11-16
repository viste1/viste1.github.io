var del = require('del');

var { watch, src, dest, parallel, series } = require('gulp');

var browserSync = require('browser-sync');

var sass = require('gulp-sass');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var pug = require('gulp-pug');

var imagemin = require('gulp-imagemin');

var webpack = require('webpack-stream');

function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: './build' },
  };

  browserSync.create().init(params);
  cb();
}

function buildPages() {
  return src('src/pages/**/*.html')
      .pipe(dest('build/'));
}

function buildPagesPug() {
    return src('src/pages/**/*.pug')
        .pipe(pug(
            //{pretty: true}
        ))
        .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/**/*.css')
      .pipe(postcss([
          autoprefixer(),
          cssnano()
      ]))
      .pipe(dest('build/styles/'));
}

function buildStylesSCSS() {
  return src('src/styles/**/*.scss')
      .pipe(sass())
      .pipe(postcss([
        autoprefixer(),
        cssnano()
      ]))
      .pipe(dest('build/styles/'));
}

function buildVendorFiles() {
    return src('src/vendor/**/*.*')
        .pipe(dest('build/vendor/'));
}

function buildFonts() {
    return src('src/fonts/**/*.*')
        .pipe(dest('build/fonts/'));
}

function buildScripts() {
    return src('src/scripts/index.js')
        .pipe(webpack({ output: { filename: 'bundle.js' } }))
        .pipe(dest('build/scripts/'));
}

function buildAssets(cb) {
    src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
        .pipe(dest('build/assets/'));
    src('src/assets/**/*.*')
        .pipe(imagemin())
        .pipe(dest('build/assets/'));
    cb();
}

function clearBuild() {
  return del('build/');
}

function watchFiles() {
    watch('src/assets/**/*.*', buildAssets);
    watch('src/pages/**/*.html', buildPages);
    watch(['src/pages/**/*.pug', 'src/blocks/**/*.pug'], buildPagesPug);
    watch('src/styles/**/*.css', buildStyles);
    watch('src/styles/**/*.scss', buildStylesSCSS);
    watch('src/vendor/**.**', buildVendorFiles);
    watch('src/scripts/**/*.js', buildScripts);
    watch('src/fonts/**/*.*', buildFonts);
}

  exports.default =
      series(
          clearBuild,
          parallel(
              devServer,
              series(
                  parallel(buildAssets, buildPages, buildFonts, buildPagesPug, buildStyles, buildStylesSCSS, buildVendorFiles, buildScripts),
                  watchFiles
              )
          )
      );