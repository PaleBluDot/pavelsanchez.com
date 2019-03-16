const project = require('./_project.js');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/*
  Watch folders for changess
*/
gulp.task('watch', function() {
  gulp
    .watch(project.buildSrc + '/assets/js/**/*', gulp.parallel('scripts'))
    .on('change', browserSync.reload);
  gulp
    .watch(project.buildSrc + '/assets/sass/**/*', gulp.parallel('styles'))
    .on('change', browserSync.reload);
  gulp
    .watch(project.buildSrc + '/**/*', gulp.parallel('generate'))
    .on('change', browserSync.reload);
});
