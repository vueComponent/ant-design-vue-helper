import { task, src, dest, series } from "gulp";
const clean = require("gulp-clean");

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

async function compile() {
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = src("src/**/*.ts")
        .pipe(tsProject());

    return tsResult.js.pipe(dest('out'));
}
task("compile", series(cleanOut, preBuild, compile));
import { ModuleKind, ScriptTarget, Program } from 'typescript';

async function read() {
    const typescript = require('typescript');
    var program: Program = typescript.createProgram(["node_modules/ant-design-vue/types/index.d.ts"], {
        rootNames: [],
        options: {
            "module": ModuleKind.CommonJS,
            "target": ScriptTarget.ESNext,
            "sourceMap": false,
            lib: ["./node_modules/ant-design-vue/types"],
            "allowJs": false,
        }
    });
    var checker = program.getTypeChecker();
    console.log(program.getSourceFiles().length);
    for (var source of program.getSourceFiles()) {
        if (source.fileName.indexOf("node_modules/ant-design-vue/") > -1) {
            console.log(source.fileName);
        }
    }
}
task(read);