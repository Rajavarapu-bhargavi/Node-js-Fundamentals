const event=require('events');
const { EventEmitter } = require('stream');
const eventEmitter=event.EventEmitter;
let emitter=new EventEmitter();
let user;
emitter.on('Myevent',function(user){
    console.log('Task1'+user);
})
emitter.on('Myevent',function(user){
    console.log('Task2'+user);
})
emitter.emit('Myevent','bhargavi');
console.log(EventEmitter.listenerCount(emitter,'Myevent'))