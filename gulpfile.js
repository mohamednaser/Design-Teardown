const gulp = require("gulp");
const autoPrefixer = require("gulp-autoprefixer");

gulp.task("stylee", function(){
 return gulp.src("src/css/*.css")
    .pipe(autoPrefixer())
    .pipe(gulp.dest("build/css/"));
});

gulp.task('watch' , function(){
    gulp.watch('src/css/*.css' , gulp.series('stylee'));
});