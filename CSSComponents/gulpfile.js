var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var taskListing = require('gulp-task-listing');
var plumber =  require('gulp-plumber');
var del = require('del');

// var paths = {
//   sass: ['./scss/**/*.scss']
// };
// 
// gulp.task('default', ['sass']);
// 
// gulp.task('sass', function(done) {
//   gulp.src('./scss/ionic.app.scss')
//     .pipe(sass())
//     .on('error', sass.logError)
//     .pipe(gulp.dest('./www/css/'))
//     .pipe(minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest('./www/css/'))
//     .on('end', done);
// });

// gulp.task('watch', function() {
//   gulp.watch(paths.sass, ['sass']);
// });
// 
// gulp.task('install', ['git-check'], function() {
//   return bower.commands.install()
//     .on('log', function(data) {
//       gutil.log('bower', gutil.colors.cyan(data.id), data.message);
//     });
// });
// 
// gulp.task('git-check', function(done) {
//   if (!sh.which('git')) {
//     console.log(
//       '  ' + gutil.colors.red('Git is not installed.'),
//       '\n  Git, the version control system, is required to download Ionic.',
//       '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
//       '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
//     );
//     process.exit(1);
//   }
//   done();
// });

gulp.task('help', taskListing);

gulp.task('clean js', function(){
  del('./www/dist/*.js');
});

var filesJS = ['./www/app/**/*.js', '!./www/dist/**/*'];

gulp.task('compile js', ['clean js'], function(){
  return gulp.src(filesJS)
    .pipe(concat('./app/dist'))
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('./www/dist'));
});

gulp.task('watch', function(){
	 gulp.watch(filesJS, ['compile js']);
});

gulp.task('build', ['compile js']);
