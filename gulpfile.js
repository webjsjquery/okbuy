var gulp = require('gulp');
var sass = require('gulp-sass') ;
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass',function(){
	gulp.src('src/*.scss').pipe(sass()).pipe(rename({'surfix' : '.min'})).pipe(gulp.dest('css'));
})

gulp.task('default',function(){
	gulp.watch(['src/*.scss'],['sass']);
})
