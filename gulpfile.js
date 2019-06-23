const gulp = require('gulp');
const shell = require('gulp-shell');

// Our gulp tasks live in their own files
require('require-dir')('./gulp-tasks');

// Run our static site generator to build the pages
gulp.task('generate', shell.task('eleventy'));

// Compile the assets to the correct destination
gulp.task('assets', gulp.parallel('images', 'styles', 'scripts'));

// Let's build this sucker, without getting data from online sources
gulp.task('dev', gulp.series('clean-build', 'assets'));

// Let's gwt the data we need and then build this sucker.
gulp.task(
  'build',
  gulp.series(
    'assets'
  )
);
