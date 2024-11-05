"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowSync = exports.Low = void 0;
function checkArgs(adapter, defaultData) {
    if (adapter === undefined)
        throw new Error('lowdb: missing adapter');
    if (defaultData === undefined)
        throw new Error('lowdb: missing default data');
}
class Low {
    constructor(adapter, defaultData) {
        checkArgs(adapter, defaultData);
        this.adapter = adapter;
        this.data = defaultData;
    }
    async read() {
        const data = await this.adapter.read();
        if (data)
            this.data = data;
    }
    async write() {
        if (this.data)
            await this.adapter.write(this.data);
    }
    async update(fn) {
        fn(this.data);
        await this.write();
    }
}
exports.Low = Low;
class LowSync {
    constructor(adapter, defaultData) {
        checkArgs(adapter, defaultData);
        this.adapter = adapter;
        this.data = defaultData;
    }
    read() {
        const data = this.adapter.read();
        if (data)
            this.data = data;
    }
    write() {
        if (this.data)
            this.adapter.write(this.data);
    }
    update(fn) {
        fn(this.data);
        this.write();
    }
}
exports.LowSync = LowSync;
//# sourceMappingURL=Low.js.map