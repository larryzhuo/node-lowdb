"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFileSyncPreset = exports.JSONFilePreset = void 0;
const JSONFile_1 = require("../adapters/node/JSONFile");
const Low_1 = require("../core/Low");
async function JSONFilePreset(filename, defaultData) {
    const adapter = new JSONFile_1.JSONFile(filename);
    const db = new Low_1.Low(adapter, defaultData);
    await db.read();
    return db;
}
exports.JSONFilePreset = JSONFilePreset;
function JSONFileSyncPreset(filename, defaultData) {
    const adapter = new JSONFile_1.JSONFileSync(filename);
    const db = new Low_1.LowSync(adapter, defaultData);
    db.read();
    return db;
}
exports.JSONFileSyncPreset = JSONFileSyncPreset;
//# sourceMappingURL=node.js.map