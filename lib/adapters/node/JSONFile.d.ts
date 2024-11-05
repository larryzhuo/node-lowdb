/// <reference types="node" />
import { PathLike } from 'fs';
import { DataFile, DataFileSync } from './DataFile';
export declare class JSONFile<T> extends DataFile<T> {
    constructor(filename: PathLike);
}
export declare class JSONFileSync<T> extends DataFileSync<T> {
    constructor(filename: PathLike);
}
