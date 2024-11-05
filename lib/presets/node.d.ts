/// <reference types="node" />
import { PathLike } from 'node:fs';
import { Low, LowSync } from '../core/Low';
export declare function JSONFilePreset<Data>(filename: PathLike, defaultData: Data): Promise<Low<Data>>;
export declare function JSONFileSyncPreset<Data>(filename: PathLike, defaultData: Data): LowSync<Data>;
