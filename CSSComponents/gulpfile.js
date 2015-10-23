var bower       = require('bower'),
    concat      = require('gulp-concat'), 
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    minifyCss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    sh          = require('shelljs'),
    taskListing = require('gulp-task-listing'),
    plumber     =  require('gulp-plumber'),
    del         = require('del'),
    less        = require('gulp-less'),
    sourcemaps  = require('gulp-sourcemaps'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    minifyCSS   = require('gulp-minify-css'),
    runSequence = require('run-sequence'),
    notify      = require('gulp-notify');

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


var filesJS   = ['!./www/js/*.js', './www/app/**/*.js', '!./www/dist/**/*'],
    filesLess = ['./www/app/**/*.less', '!./www/dist/**/*'];

gulp.task('help', taskListing);

gulp.task('clean less', function(){
    del('./www/dist/*.less');
});

gulp.task('clean js', function(){
  del('./www/dist/*.js');
});
   
gulp.task('compile less', ['clean less'], function(){
  return gulp.src(filesLess)
    .pipe(plumber())
    //.pipe(sourcemaps.init())
    .pipe(less())
    //.pipe(sourcemaps.write())
    .pipe(concat('./app/dist'))
    .pipe(rename('stylesheet.css'))
    .pipe(gulp.dest('./www/dist')); 
});

gulp.task('compile js', ['clean js', 'lint'], function(){
  return gulp.src(filesJS)
    .pipe(concat('./app/dist'))
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('./www/dist'));
});

gulp.task('lint', function(){
  gulp.src(filesJS)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('min css', function(){
 return gulp.src('./www/dist/*.css')
    .pipe(rename('stylesheet.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./www/dist'));
});

gulp.task('min js', function(){
 return gulp.src('./www/dist/*.js')
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/dist'));
});

gulp.task('watch', function(){
	 gulp.watch(filesJS, ['js']);
   gulp.watch(filesLess, ['less']);
});

gulp.task('less', ['compile less']);
gulp.task('js', ['compile js']);
gulp.task('build', ['compile js', 'compile less']);
gulp.task('min', ['min js', 'min css']);

gulp.task('buildHom', function(){
  runSequence(
    'build','min');
});