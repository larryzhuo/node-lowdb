import { PathLike } from 'node:fs';

import { JSONFile, JSONFileSync } from '../adapters/node/JSONFile';
import { Low, LowSync } from '../core/Low';

export async function JSONFilePreset<Data>(
  filename: PathLike,
  defaultData: Data
): Promise<Low<Data>> {
  const adapter = new JSONFile<Data>(filename);
  const db = new Low<Data>(adapter, defaultData);
  await db.read();
  return db;
}

export function JSONFileSyncPreset<Data>(
  filename: PathLike,
  defaultData: Data
): LowSync<Data> {
  const adapter = new JSONFileSync<Data>(filename);
  const db = new LowSync<Data>(adapter, defaultData);
  db.read();
  return db;
}
