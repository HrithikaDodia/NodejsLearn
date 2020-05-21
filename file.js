var fs = require('fs');

var readme = fs.readFileSync('read.txt', 'utf8');

console.log(readme);

fs.writeFileSync('writeme.txt', readme);



fs.readFile('readasync.txt', 'utf8', function(err, data){
	fs.writeFile("writeasync.txt", data, 'utf8', function(err){
		console.log(err);
	});
});

console.log('Test');