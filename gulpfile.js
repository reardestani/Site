// grab our gulp packages
var gulp  = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

// Watch of css file changes
gulp.watch('css/bootstrap-theme.css', ['default']);

// Minify css
gulp.task('default', function() {
  return gulp.src(['css/bootstrap.min.css', 'css/bootstrap-theme.css'])
    .pipe(minifyCss())
    .pipe(concat('styles.css'))
    //.pipe(rename('bootstrap-theme.min.css'))
    .pipe(gulp.dest('css'));
});