import { task, src, dest, series } from "gulp";
const clean = require("gulp-clean");
var ts = require('gulp-typescript');
const cleanOut = function () {
    return src('./out', { read: false, allowEmpty: true })
        .pipe(clean());
};
task('clean:all', cleanOut);
function preBuild() {
    return src('src/config/**')
        .pipe(dest('out/config'));
}
task("preBuild", series(cleanOut, preBuild));
var tsProject = ts.createProject('tsconfig.json');
async function compile() {
    var tsResult = src("src/**/*.ts")
        .pipe(tsProject());

    return tsResult.js.pipe(dest('out'));
}
task("compile", series(cleanOut, preBuild, compile));