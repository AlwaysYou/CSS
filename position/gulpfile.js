var gulp = require('gulp');
	stylus = require('gulp-stylus');
	connect = require('gulp-connect');

//  Tareas
gulp.task('styles', function(){
	gulp.src('./stylus/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./css'))
	.pipe(connect.reload())
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

gulp.task('watch', function(){
	gulp.watch('./stylus/*.styl', ['styles'])
	gulp.watch('./*.html', ['html'])

	});
gulp.task('default', ['styles', 'watch', 'connect', 'html'])