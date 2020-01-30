const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
 
const style = () => (
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
);
 
const watch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.html').on(browserSync.reload);
};

exports.style = style;
exports.watch = watch;
