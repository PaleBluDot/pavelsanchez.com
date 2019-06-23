const project = require('./_project.js');
const gulp = require('gulp');
const clean = require('gulp-clean');

// cleanup the build output
gulp.task('clean-build', function() {
  return gulp.src(project.buildDest, { read: false })
  .pipe(clean({force: true}))
  .pipe(clean());
});
