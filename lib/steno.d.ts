/// <reference types="node" />
/// <reference types="node" />
import { PathLike } from 'node:fs';
import { writeFile } from 'node:fs/promises';
declare type Data = Parameters<typeof writeFile>[1];
export declare class Writer {
    #private;
    constructor(filename: PathLike);
    write(data: Data): Promise<void>;
}
export {};
