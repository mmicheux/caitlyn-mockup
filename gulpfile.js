var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('docs/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('docs/css'))
});
