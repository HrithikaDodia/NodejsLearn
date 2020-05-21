var counter = function(arr){
	return 'There are '+arr.length+' elements in this array';
}

var add = function(a, b){
	return `The addition of the two numbers is ${a+b}`;
}

module.exports = {
	counter: counter;
	add: add;
};
