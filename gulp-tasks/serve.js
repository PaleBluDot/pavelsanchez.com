const project = require('./_project.js');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Local webserver for development
gulp.task('serve', function() {
  // Folder you want to serve
  browserSync.init({
    server: './build'
  });

  gulp
    .watch(project.buildSrc + '/src/js/**/*', gulp.parallel('scripts'))
    .on('change', browserSync.reload);
  gulp
    .watch(project.buildSrc + '/src/sass/**/*', gulp.parallel('styles'))
    .on('change', browserSync.reload);
  gulp
    .watch(project.buildSrc + '/**/*', gulp.parallel('generate'))
    .on('change', browserSync.reload);
});
