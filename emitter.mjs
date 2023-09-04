import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", function(name){
    console.info(`Hello ${name}`);
})

emitter.addListener("hello", function(name){
    console.info(`Hello ${name}`);
})

emitter.emit("hello", "rizki");