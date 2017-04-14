var gulp         = require('gulp'),
	browserSync  = require('browser-sync').create();

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "domain.name", // Change proxy to your domain name
		notify: false
	});
});

gulp.task('watch', function () {
	gulp.watch('app/css/**/*.css').on("change", browserSync.reload);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/**/*.php').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
