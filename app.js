var count = require('./count');


console.log(__dirname);
console.log(__filename);

console.log('Hey Node!! Node is awesome!');

time = 0;

setTimeout(function(){

	console.log('3 seconds have passed');

}, 3000);


var timer = setInterval(function(){

	time += 2;

	console.log(time + ' seconds have passed');

	if(time > 5){
		clearInterval(timer);
	}

}, 2000);

function sayHi(){
	console.log('Hi');
}

sayHi();

function callFunction(fun){
	fun();
}

var sayBye = function(){
	console.log('Bye');
}

callFunction(sayBye);



console.log(count.counter(['The', 'Amazing', 'NodeJs']));

console.log(count.add(10, 5));

