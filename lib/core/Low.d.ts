import { Adapter, SyncAdapter } from "../interface";
export declare class Low<T = unknown> {
    adapter: Adapter<T>;
    data: T;
    constructor(adapter: Adapter<T>, defaultData: T);
    read(): Promise<void>;
    write(): Promise<void>;
    update(fn: (data: T) => unknown): Promise<void>;
}
export declare class LowSync<T = unknown> {
    adapter: SyncAdapter<T>;
    data: T;
    constructor(adapter: SyncAdapter<T>, defaultData: T);
    read(): void;
    write(): void;
    update(fn: (data: T) => unknown): void;
}
