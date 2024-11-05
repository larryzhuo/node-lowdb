"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFileSync = exports.JSONFile = void 0;
const DataFile_1 = require("./DataFile");
class JSONFile extends DataFile_1.DataFile {
    constructor(filename) {
        super(filename, {
            parse: JSON.parse,
            stringify: (data) => JSON.stringify(data, null, 2),
        });
    }
}
exports.JSONFile = JSONFile;
class JSONFileSync extends DataFile_1.DataFileSync {
    constructor(filename) {
        super(filename, {
            parse: JSON.parse,
            stringify: (data) => JSON.stringify(data, null, 2),
        });
    }
}
exports.JSONFileSync = JSONFileSync;
//# sourceMappingURL=JSONFile.js.map