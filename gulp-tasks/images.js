const project = require('./_project.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Optimize images
gulp.task('images', function(done) {
  gulp
    .src(project.buildSrc + '/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest(project.buildDest + '/assets/images'));
  done();
});
