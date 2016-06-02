var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('app/assets/stylesheets/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream())
});

gulp.task('serve', function(){
	browserSync.init({
		server: "./public"
	});

	gulp.watch("app/assets/stylesheets/**/*.scss", ["sass"]);
	gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
