/**
 * File System Util
 * @author Zou Jian <https://github.com/chsword>
 */
const fs = require('fs');
const path = require('path');

class DirectoryManager {
    parentDir(pathFile: string) {
        var arr = pathFile.split("/");
        if (arr.length < 3) { return null; }
        return arr[arr.length - 2];
    }
    getFileName(pathFile: string) {
        var arr = pathFile.split("/");
        if (arr.length < 2) { return null; }
        return arr[arr.length - 1];
    }
    exists(filepath) {
        var exists = fs.existsSync(filepath);
        if (exists) {
            return filepath;
        } else {
            return this.exists(path.dirname(filepath));
        }
    }
    mkdir = function (filepath: string, callback: Function, mode?) {
        var root = this.exists(filepath);
        var children = path.relative(root, filepath);
        mode = mode || 511;
        if (!children) { return callback(); }
        children = children.split(path.sep);
        function create(filepath) {
            if (create.count === children.length) {
                return callback();
            }

            filepath = path.join(filepath, children[create.count]);

            fs.mkdir(filepath, mode, function (err) {
                create.count++;
                create(filepath);
            });
        }
        create.count = 0;
        create(root);
    }
}
const dir = new DirectoryManager();

class FileManager {
    async writeFile(filename: string, data: any, callback, options?) {
        var dirname = path.dirname(filename);
        dir.mkdir(dirname, function () {
            fs.writeFile(filename, data, options, callback);
        });
        return;
    }
    async readFile(filename: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        });
    }
}
const file = new FileManager();
export default file;
export { file, dir };
