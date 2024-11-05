## 介绍
这是一个基于本地 json 文件的持久化存储方案，可以用于轻量级本地存储场景，比如爬虫进度记录，可能就是一个下标，没必要引入关系型数据库做存储


## Install （安装）

> npm i local-lowdb --save

## API

```typescript
// init db
const file = path.join(cacheDir, './db.json');
let db = await JSONFilePreset<Data>(file, {
  liveFeed: 0,
});

//read
console.log(db.data.liveFeed);

//write
db.data.liveFeed = 99;
await db.write();


```

