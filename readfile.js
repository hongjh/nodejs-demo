/*
 * 异步I/O操作
 * 
 * 先输出 end., 然后输出file.txt内容
 */

var fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);	
	}
});

console.log('end.');

