const project = require('./_project.js');
const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile SCSS files to CSS
gulp.task('styles', function() {
  return gulp
    .src(project.buildSrc + '/_includes/sass/style.scss')
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(project.buildDest + '/css'));
});
