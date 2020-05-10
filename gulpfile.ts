/**
 * Gulp file to build the ant-design-vue-helper extensions for vscode
 * @author Zou Jian <https://github.com/chsword>
 */
import { task, src, dest, series } from "gulp";
const clean = require("gulp-clean");
import typescriptPaser from "./build/typescriptPaser";

/**
 * Clean the folder "out"
 */
const cleanOut = function () {
    return src('./out', { read: false, allowEmpty: true })
        .pipe(clean());
};
task('clean:all', cleanOut);

/**
 * copy src/config to out/config
 */
function preBuild() {
    return src('src/config/**')
        .pipe(dest('out/config'));
}
task("preBuild", series(cleanOut, preBuild));
/**
 * Compile the typescript to javascript
 */
async function compile() {
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = src("src/**/*.ts")
        .pipe(tsProject());

    return tsResult.js.pipe(dest('out'));
}
task("compile", series(cleanOut, preBuild, compile));
/**
 * Sync update from node_modules/ant-design-vue to the config/*.json
 */
async function syncFromAntdv() {
    typescriptPaser.run();
    return;
}
task(syncFromAntdv);
