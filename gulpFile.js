var autoprefix = require('gulp-autoprefixer'),
		connect = require('gulp-connect'),
		gulp = require('gulp'),
		sass = require('gulp-sass'),
		teqtonic = require('teq-tonic').includePaths;

var paths = {
	scss: ['./scss/**/*.scss']
};

gulp.task('sass', function () {
	return gulp.src(paths.scss)
	.pipe(sass({
		sourcemaps: true,
		includePaths: [teqtonic]
	}))
	.pipe(autoprefix('last 2 versions'))
	.pipe(gulp.dest('./css'))
	.pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
		root: '',
		port: 1337,
		livereload: true
	});
});

gulp.task('default', ['sass', 'connect'], function() {
	gulp.watch(paths.scss, ['sass']);
});
