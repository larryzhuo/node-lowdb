/// <reference types="node" />
import { PathLike } from 'node:fs';
import { Adapter, SyncAdapter } from '../../interface';
export declare class TextFile implements Adapter<string> {
    #private;
    constructor(filename: PathLike);
    read(): Promise<string | null>;
    write(str: string): Promise<void>;
}
export declare class TextFileSync implements SyncAdapter<string> {
    #private;
    constructor(filename: PathLike);
    read(): string | null;
    write(str: string): void;
}
