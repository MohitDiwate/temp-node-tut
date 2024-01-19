const path= require('path');

console.log(path.sep);

const filePath =path.join('Async','first.txt');
console.log(filePath); 

const base=path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,'Async','first.txt');
console.log(absolutePath);