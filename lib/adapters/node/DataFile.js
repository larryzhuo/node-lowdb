"use strict";
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
var _DataFile_adapter, _DataFile_parse, _DataFile_stringify, _DataFileSync_adapter, _DataFileSync_parse, _DataFileSync_stringify;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFileSync = exports.DataFile = void 0;
const TextFile_1 = require("./TextFile");
class DataFile {
    constructor(filename, { parse, stringify, }) {
        _DataFile_adapter.set(this, void 0);
        _DataFile_parse.set(this, void 0);
        _DataFile_stringify.set(this, void 0);
        __classPrivateFieldSet(this, _DataFile_adapter, new TextFile_1.TextFile(filename), "f");
        __classPrivateFieldSet(this, _DataFile_parse, parse, "f");
        __classPrivateFieldSet(this, _DataFile_stringify, stringify, "f");
    }
    async read() {
        const data = await __classPrivateFieldGet(this, _DataFile_adapter, "f").read();
        if (data === null) {
            return null;
        }
        else {
            return __classPrivateFieldGet(this, _DataFile_parse, "f").call(this, data);
        }
    }
    write(obj) {
        return __classPrivateFieldGet(this, _DataFile_adapter, "f").write(__classPrivateFieldGet(this, _DataFile_stringify, "f").call(this, obj));
    }
}
exports.DataFile = DataFile;
_DataFile_adapter = new WeakMap(), _DataFile_parse = new WeakMap(), _DataFile_stringify = new WeakMap();
class DataFileSync {
    constructor(filename, { parse, stringify, }) {
        _DataFileSync_adapter.set(this, void 0);
        _DataFileSync_parse.set(this, void 0);
        _DataFileSync_stringify.set(this, void 0);
        __classPrivateFieldSet(this, _DataFileSync_adapter, new TextFile_1.TextFileSync(filename), "f");
        __classPrivateFieldSet(this, _DataFileSync_parse, parse, "f");
        __classPrivateFieldSet(this, _DataFileSync_stringify, stringify, "f");
    }
    read() {
        const data = __classPrivateFieldGet(this, _DataFileSync_adapter, "f").read();
        if (data === null) {
            return null;
        }
        else {
            return __classPrivateFieldGet(this, _DataFileSync_parse, "f").call(this, data);
        }
    }
    write(obj) {
        __classPrivateFieldGet(this, _DataFileSync_adapter, "f").write(__classPrivateFieldGet(this, _DataFileSync_stringify, "f").call(this, obj));
    }
}
exports.DataFileSync = DataFileSync;
_DataFileSync_adapter = new WeakMap(), _DataFileSync_parse = new WeakMap(), _DataFileSync_stringify = new WeakMap();
//# sourceMappingURL=DataFile.js.map