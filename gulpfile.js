const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin =require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./src/styles/*scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/styles/'))
}

function imageMin(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}
function comprimejs(){
    return gulp.src('./src/js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}



exports.default = gulp.parallel(imageMin, compilaSass, comprimejs)
exports.watch = function () {gulp.watch('./src/styles/*.scss', {ignoreInitial:false}, gulp.parallel(compilaSass)),
gulp.watch('./src/js/*.js', {ignoreInitial: false}, gulp.parallel(comprimejs))}