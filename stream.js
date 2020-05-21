var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt');

myReadStream.on('data', function(chunk){
	console.log('New chunk received');
	myWriteStream.write(chunk);
});


// using pipes instead of event listener

myReadStream.pipe(myWriteStream);