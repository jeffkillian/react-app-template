var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
 
 
/* Task to compile less */
gulp.task('build-less', function() {  
  gulp.src('./src/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./src/less/*.less' , ['build-less']);
});
 
 
/* Task when running `gulp` from terminal */
gulp.task('watch', ['watch-less']);gulp 