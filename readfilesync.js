/*
 * 同步I/O操作
 * 输出file.txt内容， 再输出 end.
 */
var fs = require('fs');


var data = fs.readFileSync('file.txt', 'utf-8');

console.log(data);
console.log('end.');
