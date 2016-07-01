function Hello() {
	var name;

	this.setName = function (thyName) {
		name = thyName;
	}

	this.sayHello = function () {
		console.log('Hello ' + name);
	}

}

// 不同之处：hello.js 为 module.exports
exports.module = Hello;