var gulp = require('gulp'),
	stylus = require('gulp-stylus');
	connect = require('gulp-connect'),

gulp.task('styles', function(){
	gulp.src('./stylus/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./css'))
	});
// directorios del sistema
var path = {
	stylus_dirs: 'source/static/stylus/**/*.styl',
	html_build: 'source/app/',

}
//Variables de Templates
CONST = {
	ROOT: './'
}
var server_port = 8080;
//Livereload - Watch Taks HTML - CSS
gulp.task('connect', function(){
	connect.server({
		root: CONST.ROOT,
		port: server_port,
		livereload: true
	});
});


gulp.task('reload_server', function () {
	// Se retrasa a 0.2 segundos el LiveReload
	setTimeout(function () {
		return gulp.src(path.html_build).pipe(connect.reload()).on('end', function(){
				console.log('>>>>>>>>>> Navegador refrescado...');
			});
	}, 768);
});

gulp.task('watch', function(){
	gulp.watch('**/*.styl', ['styles']);
	gulp.watch(path.stylus_dirs, ['stylus', 'reload_server']);
	});

// Importar wancho clear etc
// gulp.task('stylus_prod', function () {
// 	return gulp.src("./gulpfile.js")
// 	//.pipe(plumber())
// 	.pipe(stylus({ use: nib(),  import: ['nib']}))
// 	//.pipe(plumber.stop())
// 	.pipe(gulp.dest(path.css))});


gulp.task('default', ['connect', 'styles',
					  'watch',])