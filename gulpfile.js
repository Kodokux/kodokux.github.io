var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',//ルートディレクトリ
    livereload: true //ライブリロード
  });
});

// gulp.task('html', function () {
//   gulp.src('./app/*.html')
//     .pipe(connect.reload());
// });

gulp.task('all', function () {
  gulp.src('./**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./**/*'], ['all']);
});

gulp.task('default', ['connect', 'watch']);
