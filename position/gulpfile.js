var gulp = require('gulp');
	stylus = require('gulp-stylus');
	connect = require('gulp-connect');
	swig = require('gulp-swig'),

// Variables

	path = {
	html_swig: ['./*.html','./common/*.html'],
	html_swig_dest: './*.html',
},

	//  Tareas
gulp.task('styles', function(){
	gulp.src('./stylus/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./css'))
	.pipe(connect.reload())
	console.log('>>>>>>>>>> Stylus refrescado...');

	});


gulp.task('html', function(){
	gulp.src('./*.html')
	.pipe(gulp.dest(''))
	.pipe(connect.reload())
	console.log('>>>>>>>>>> HTML refrescado...');
	});

gulp.task('connect',function(){
  connect.server({
  root: '.',
  port: 8080,
  livereload: true
  //open: { browser: 'Google Chrome'}
  //error ?
  });
 });﻿
// swig
	// Codigo
function get_range_funtion (input) {
	var data = [];
	var length = input; // user defined length
	for(var i = 0; i < length; i++) {
		data.push(makeid());
	}
	return data
}
function cycle_funtion (input,index_loop) {
	index_loop = parseInt(index_loop);
	var data_cycle = input.split(',');
	var index_cycle = index_loop % data_cycle.length;
	return data_cycle[index_cycle] // user defined length
}


gulp.task('watch', function(){
	gulp.watch('./stylus/*.styl', ['styles'])
	gulp.watch('./*.html', ['html'])

	});


gulp.task('default', ['styles', 'watch', 'connect', 'html', ])