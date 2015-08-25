var gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  iconfont = require('gulp-iconfont'),
  iconfontCss = require('gulp-iconfont-css');
  stylus = require("gulp-stylus");

gulp.task("watch", function() {
  gulp.watch(["./src/static/stylus/*.styl"], ["style"])
});

gulp.task('webfont', function() {
 return gulp.src('src/static/icons/*') // emplacement des icônes en SVG
    .pipe(iconfontCss({
      fontName: 'icons', // nom de l’iconfont
      targetPath: '../stylus/icons-font.styl', // emplacement de la CSS finale
      fontPath: '../static/fonts/' // emplacement de la font finale
    }))
    .pipe(iconfont({
      fontName: 'icons', // nom de l’iconfont
      normalize: true, // si vos icônes n’ont pas la même taille, redimensionnement en prenant la taille la plus grande
     }))
    .pipe( gulp.dest('src/static/fonts') )
}) ;

gulp.task("style", function() {
  return gulp.src("./src/static/stylus/index.styl")
    .pipe(stylus({
      set: [
        "include css"
      ]
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./src/css/"))
});

