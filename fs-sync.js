const fs=require('fs');

const first=fs.readFileSync('./Sync/first.txt','utf8');
console.log(first);

const second=fs.readFileSync('./Sync/second.txt','utf8');
console.log(second);

fs.writeFileSync('./Sync/result.txt',`Here is the result: ${first},${second}.`,{flag:'a'});
