const event=require('events');
const eventEmitter=new event.EventEmitter();
const eventHandler=function(){
    console.log('I hear a scream');
}
//Assign
eventEmitter.on('scream',eventHandler);
//Emit
eventEmitter.emit('scream');
