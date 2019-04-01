const project = require('./_project.js');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');

// Uglify our javascript files into one.
// Use pump to expose errors more usefully.
gulp.task('scripts', function(done) {
  pump(
    [
      gulp.src(project.buildSrc + '/src/js/**/*.js'),
      concat('app.js'),
      uglify(),
      gulp.dest(project.buildDest + '/src/js')
    ],
    done()
  );
});
