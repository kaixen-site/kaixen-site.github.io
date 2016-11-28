var css = require('jarvis.css');
const img2svg = require('gulp-img2svg');
const gulp = require('gulp');

css.defineTasks({
    entry: ['src/styles/**/*.entry.less'],
    output: 'dist/css/',
    watch: [
        'src/styles/**/*.entry.less',
        'src/styles/**/{*.entry.less,*.less,*.css}'
    ]
});

gulp.task('img2svg', function () {
    gulp.src('./src/icons/*.*')
        .pipe(img2svg())
        .pipe(gulp.dest('./dist/images/icons'));
});