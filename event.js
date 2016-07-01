var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

// 注册 some_event 监听器
event.on('some_event', function() {
	console.log('some_event occured');
});

// 1000毫秒, 向event 对象发送事件 some_event
// event 调用 some_event 监听器

// emit 发射   发射事件
setTimeout(function() {
	event.emit('some_event');
}, 1000);