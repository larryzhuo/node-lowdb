import { JSONFilePreset, Low } from '../src/index';
import * as path from 'path';
import * as fs from 'fs';

async function sleep(time) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

type Data = {
  liveFeed: number;
};


jest.setTimeout(60 * 1000);

describe('lowdb json', () => {
  /**
   * test json storage
   */
  test('test json storage', async () => {
    
    let cacheDir = path.join(__dirname, '../cache');
    if(!fs.existsSync(cacheDir)) {
      await fs.promises.mkdir(cacheDir, {recursive: true});
    }

    const file = path.join(cacheDir, './db.json');
    let db = await JSONFilePreset<Data>(file, {
      liveFeed: 0,
    });


    db.data.liveFeed = 99;
    await db.write();

    let startOffset = db.data.liveFeed || 0;

   

    expect(startOffset).toBe(99);
  });

});
