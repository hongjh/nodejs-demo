// 事件发射器
/*
EventEmitter.on(event, listener)
EventEmitter.emit(event, [arg1], [arg2], [...])
EventEmitter.once(event, listener)
EventEmitter.removeListener(event, listener)
EventEmitter.removeAllListeners([event])
*/

var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
	console.log('listtener1', arg1, arg2);
});



emitter.on('someEvent', function(arg1, arg2) {
	console.log('listtener2', arg1, arg2);
});

emitter.emit('someEvent', 'byvoid', 1991);





