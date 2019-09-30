const gulp = require("gulp");
const autoPrefixer = require("gulp-autoprefixer");

gulp.task("stylee", function(){
 return gulp.src("src/css/style.css")
    .pipe(autoPrefixer())
    .pipe(gulp.dest("build"));
});

gulp.task('watch' , function(){
    gulp.watch('src/css/*.css' , ['stylee']);
});