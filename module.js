// 创建及加载模块

// exports 是模块公开的接口，
// require 用于从外部获取一个模块的接口, 即所获取模块的 exports 对象。


// name 只能在当前 module.js 中访问，
// 外部通过 require 是访问不到的
var name;

exports.setName = function (thyName) {
	name = thyName;
};

exports.sayHello = function () {
	console.log('Hello ' + name);
};