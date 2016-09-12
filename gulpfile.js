var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('scripts', function() {
    gulp.src(['./js/*.js'])
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function() {
    gulp.src(['./assets/sass/main.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
   
   browserSync.init({
       server: {
           baseDir: './'
       }
   });

   gulp.watch('./js/**', function(event) {
        gulp.run('scripts');
    })

    gulp.watch('./assets/sass/*.scss', function(event) {
        gulp.run('styles');
    })

    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['scripts', 'styles', 'serve']);