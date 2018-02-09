var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('docs/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('docs/scss/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('docs/js/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})