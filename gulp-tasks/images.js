const project = require('./_project.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Optimize images
gulp.task('images', function(done) {
  gulp
    .src(project.buildSrc + '/src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest(project.buildDest + '/src/images'));
  done();
});
