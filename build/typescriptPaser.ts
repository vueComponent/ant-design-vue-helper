/**
 * Parse node_modules/ant-design-vue/types and get all tags / attributes / commit / defaultValue / types
 * @author Zou Jian <https://github.com/chsword>
 */
import * as def from "./def";
import {
  ModuleKind,
  ScriptTarget,
  Program,
  TypeChecker,
  SyntaxKind,
  SymbolFlags,
  SymbolTable,
  Declaration,
  Type,
  JSDocTypeTag,
  JSDoc,
  JSDocType,
} from "typescript";
import { file, dir } from "./fileManager";
import specialAttributesMap from "./specialAttributesMap";
import specialExcludeMap from "./specialExcludeMap";
const _ = require("lodash");
class TypescriptParser {
  checker: TypeChecker;
  program: Program;
  excludes = ["component.d.ts"];

  constructor() {
    const typescript = require("typescript");
    this.program = typescript.createProgram(
      ["node_modules/ant-design-vue/types/index.d.ts"],
      {
        rootNames: [],
        options: {
          module: ModuleKind.CommonJS,
          target: ScriptTarget.ESNext,
          sourceMap: false,
          lib: ["./node_modules/ant-design-vue/types"],
          allowJs: false,
        },
      }
    );
    this.checker = this.program.getTypeChecker();
  }
  getKeys(table: SymbolTable): Array<any> {
    var keys: any[] = [];
    var iterator = table.keys();
    do {
      var x = iterator.next();
      if (x.done) {
        break;
      }
      keys.push(x.value);
    } while (!x.done);
    return keys;
  }
  getFolderName(fileName: string) {
    var parentDir = dir.parentDir(fileName);
    if (!parentDir || parentDir == "types") {
      parentDir = dir.getFileName(fileName).replace(".d.ts", "");
    }
    return this.folderFixDict[parentDir] || parentDir;
  }

  folderFixDict = {
    /*"auto-complete": "autoComplete" */
  };
  run() {
    var program = this.program;
    var checker = this.checker;
    var fileList: { fileName; folder }[] = [];
    var memberTable = {};
    for (var source of program.getSourceFiles()) {
      if (source.fileName.indexOf("node_modules/ant-design-vue/") < 0) {
        continue;
      }
      if (this.excludes.find((c) => source.fileName.endsWith(c))) {
        continue;
      }
      var folder = this.getFolderName(source.fileName);
      var symbol = checker.getSymbolAtLocation(source);
      var exportKeys = this.getKeys(symbol.exports);
      for (var exportKey of exportKeys) {
        var val = symbol.exports.get(exportKey);
        var kind = (val.declarations[0] as any).kind;
        if (kind !== SyntaxKind.ClassDeclaration) {
          continue;
        }
        var exportMembers = symbol.exports.get(exportKey).members;
        if (exportKey === "default") {
          // fixed : use "export default " in layout, but export declare in other files
          // so when use the keywords "export declare", can get the class name directly, but "export default" get the key="default"
          exportKey = (val.declarations[0] as any).name.text;
        }
        // The type specified in specialExcludeMap is ignored
        if (specialExcludeMap.has(`${folder}/${exportKey}`)) {
          continue;
        }
        var antdTag = this.getAntdTag(exportKey);

        var members = this.getMembers(antdTag, exportMembers);
        var camelName = this.getCamelCase(exportKey);
        var fileName = `${camelName}.json`;
        this.writeAttributeJSONFile(folder, fileName, members);
        fileList.push({
          fileName: camelName,
          folder,
        });
        memberTable[antdTag] = members;
      }
    }
    this.writeUIAttributesJsFile(fileList);
    this.writeUITagsJsFile(memberTable);
  }
  async writeUITagsJsFile(memberTable) {
    var templateJson: any = await file.readFile(
      "./build/ui-tags-template.json"
    );
    var template = JSON.parse(templateJson);
    for (var key in memberTable) {
      var members = memberTable[key];
      var attributes = _.keys(members).map((c) => c.replace(`${key}/`, ""));
      if (!template[key]) {
        template[key] = {
          description: key
            .substr(2, key.length - 1)
            .split("-")
            .join(" "),
        };
      }
      template[key].attributes = attributes;
    }
    var jsonFilePath = "./src/config/ui-tags.json";
    file.writeFile(
      jsonFilePath,
      JSON.stringify(template, null, "\t"),
      (err) => {
        if (err) {
          console.error(`err when write file to ${jsonFilePath}`, err);
        } else {
          console.info(`update ${jsonFilePath} successed!`);
        }
      }
    );
  }
  writeUIAttributesJsFile(fileList: { fileName: any; folder: any }[]) {
    var defineArray = [];
    var exportArray = [];
    for (var item of fileList) {
      var variableName =
        item.fileName == "switch" ? "switchJson" : item.fileName;
      defineArray.push(
        `import * as ${variableName} from './attributes/${item.folder}/${item.fileName}.json';`
      );
      exportArray.push(`  ...${variableName},`);
    }
    var fileText = `
/**
 * Generate by 'npm run sync' and generate code is in the file "./build/typescriptPaser.ts"
 * When use this command, it will change the files: ui-tags.json , ui-attributes.js and files "src/config/attributes/*.json"
 * @author Zou Jian <https://github.com/chsword>
*/
${defineArray.join("\n")}
export default {
${exportArray.join("\n")}
}`;
    var jsonFilePath = `src/config/ui-attributes.js`;
    file.writeFile(jsonFilePath, fileText, (err) => {
      if (err) {
        console.error(`err when write file to ${jsonFilePath}`, err);
      } else {
        console.info(`update ${jsonFilePath} successed!`);
      }
    });
  }
  writeAttributeJSONFile(folder: string, fileName: string, members: any) {
    var jsonFilePath = `src/config/attributes/${folder}/${fileName}`;
    file.writeFile(jsonFilePath, JSON.stringify(members, null, "\t"), (err) => {
      if (err) {
        console.error(`err when write file to ${jsonFilePath}`, err);
      } else {
        console.info(`update ${jsonFilePath} successed!`);
      }
    });
  }
  getSimpleType(type: Type): { type: string; options?: Array<string> } {
    var t = type as any;
    var typeString = this.checker.typeToString(type);
    if (t.types && t.types.length > 1) {
      var set = new Set(t.types.map((c) => c.flags));
      if (set.size == 1) {
        if (typeString.indexOf('"') >= 0) {
          return {
            type: "string",
            options: JSON.parse(`[${typeString.replace(/\|/gi, ",")}]`),
          };
        }
      }
    }
    return { type: typeString };
  }
  getMembers(prefix: string, members: SymbolTable): any {
    if (specialAttributesMap[prefix]) {
      prefix = specialAttributesMap[prefix];
    }

    var returnMembers: any = {};
    for (var key of this.getKeys(members)) {
      var member = members.get(key);
      var declaration = member.valueDeclaration;
      var type = this.checker.getTypeOfSymbolAtLocation(member, declaration);
      var name = (declaration as any).name.escapedText;
      var simpleType = this.getSimpleType(type);
      var comment = this.getMemberComment(declaration);
      var result: def.TagAttributes = {
        description: comment.comment,
        optionType:
          simpleType.type == "any" && comment.type
            ? comment.type
            : simpleType.type,
        defaultValue: comment.default,
      };
      if (simpleType.options) {
        result.options = simpleType.options;
      }
      var prop = `${prefix}/${name}`;
      returnMembers[prop] = result;
      //console.log(prop, result.optionType);
    }
    return returnMembers;
  }
  getJsDocDefaultValue(jsDoc: JSDoc) {
    if (jsDoc.tags) {
      var defaults = jsDoc.tags.filter(
        (c) => c.tagName && c.tagName.escapedText == "default"
      );
      if (defaults.length > 0) {
        return defaults[0].comment;
      }
    }
    return null;
  }
  getJsDocType(jsDoc: any) {
    var type = "";
    if (jsDoc && jsDoc.tags) {
      var typeTags = jsDoc.tags.filter(
        (c) => c.kind === SyntaxKind.JSDocTypeTag
      );
      if (typeTags.length > 0) {
        var typeTag: JSDocTypeTag = typeTags[0];
        type = typeTag.typeExpression.getFullText();
        if (type == "any") {
          var typeComment = (typeTag.typeExpression.parent as any).comment;
          if (typeComment) {
            type = typeComment;
          }
        }
      }
      if (type && type.startsWith("(") && type.endsWith(")")) {
        type = type.substr(1, type.length - 2);
        // type = this.getSimpleType(jsDoc[0].tags[0].typeExpression)
      }
    }
    return type;
  }
  getMemberComment(
    declaration: Declaration
  ): { comment: string; default: string; type: string } {
    var jsDoc = (declaration as any).jsDoc;
    var comment = "-",
      defaultValue = "-",
      type = "";
    if (jsDoc && jsDoc.length) {
      comment = jsDoc[0].comment || "-";
      defaultValue = this.getJsDocDefaultValue(jsDoc[0]) || "-";
      type = this.getJsDocType(jsDoc[0]) || "";
    }
    return { comment: comment, default: defaultValue, type: type };
  }
  getCamelCase(className: string) {
    return `${className.charAt(0).toLowerCase()}${className.substr(1)}`;
  }
  getAntdTag(className: string) {
    var strArray: any[] = ["a"];
    for (var i = 0; i < className.length; i++) {
      var c = className.charAt(i);
      if (c.match(/^.*[A-Z]+.*$/)) {
        strArray.push("-");
      }
      strArray.push(c.toLowerCase());
    }
    return strArray.join("");
  }
}

export default new TypescriptParser();
