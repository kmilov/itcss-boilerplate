var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var styleguide = require('sc5-styleguide');
var styleguideBuildPath = "public/styleguide";

gulp.task('styleguide:generate', function(){
	return gulp.src('app/assets/stylesheets/**/*.scss')
		.pipe(styleguide.generate({
			title: 'ITCSS Styleguide sample',
			server: true,
			rootPath: styleguideBuildPath,
			overviewPath: 'README.md',
			sideNav: true,
			port: 3003,
		}))
		.pipe(gulp.dest(styleguideBuildPath));
})

gulp.task('styleguide:applystyles', function(){
	return gulp.src('app/assets/stylesheets/application.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(styleguide.applyStyles())
		.pipe(gulp.dest(styleguideBuildPath));
})

gulp.task('styleguide:assets', function() {
  gulp.src(['app/assets/fonts/**'])
    .pipe(gulp.dest(styleguideBuildPath + '/fonts'));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:assets', 'styleguide:applystyles'])

gulp.task('sass', function(){
	return gulp.src('app/assets/stylesheets/**/*.scss')
	.pipe(sass({
		errLogToConsole: true
	}))
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream())
});

gulp.task('serve', function(){
	browserSync.init({
		server: "./public"
	});

	gulp.watch("app/assets/stylesheets/**/*.scss", ["sass", "styleguide"]);
	gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['styleguide', 'serve']);
