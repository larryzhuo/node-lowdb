"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TextFile_filename, _TextFile_writer, _TextFileSync_tempFilename, _TextFileSync_filename;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFileSync = exports.TextFile = void 0;
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
const path = __importStar(require("path"));
const steno_1 = require("../../steno");
class TextFile {
    constructor(filename) {
        _TextFile_filename.set(this, void 0);
        _TextFile_writer.set(this, void 0);
        __classPrivateFieldSet(this, _TextFile_filename, filename, "f");
        __classPrivateFieldSet(this, _TextFile_writer, new steno_1.Writer(filename), "f");
    }
    async read() {
        let data;
        try {
            data = await (0, promises_1.readFile)(__classPrivateFieldGet(this, _TextFile_filename, "f"), 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        return __classPrivateFieldGet(this, _TextFile_writer, "f").write(str);
    }
}
exports.TextFile = TextFile;
_TextFile_filename = new WeakMap(), _TextFile_writer = new WeakMap();
class TextFileSync {
    constructor(filename) {
        _TextFileSync_tempFilename.set(this, void 0);
        _TextFileSync_filename.set(this, void 0);
        __classPrivateFieldSet(this, _TextFileSync_filename, filename, "f");
        const f = filename.toString();
        __classPrivateFieldSet(this, _TextFileSync_tempFilename, path.join(path.dirname(f), `.${path.basename(f)}.tmp`), "f");
    }
    read() {
        let data;
        try {
            data = (0, node_fs_1.readFileSync)(__classPrivateFieldGet(this, _TextFileSync_filename, "f"), 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        (0, node_fs_1.writeFileSync)(__classPrivateFieldGet(this, _TextFileSync_tempFilename, "f"), str);
        (0, node_fs_1.renameSync)(__classPrivateFieldGet(this, _TextFileSync_tempFilename, "f"), __classPrivateFieldGet(this, _TextFileSync_filename, "f"));
    }
}
exports.TextFileSync = TextFileSync;
_TextFileSync_tempFilename = new WeakMap(), _TextFileSync_filename = new WeakMap();
//# sourceMappingURL=TextFile.js.map