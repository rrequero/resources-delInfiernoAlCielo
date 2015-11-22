module.exports.factorial = function(n){
	var result= 1;
	for(var i=n; i > 0; i--){
		result = result*i;
	}
	return result;
};

module.exports.factorialGenerator = function*(n){
	var result = 1;
	for(var i=n; i > 0; i--){
		result = result*i;
		yield result;
	}
	return result;
}
/*
var num = 3;

var fac = factorial(num);
console.log("factorial : ", fac );

var facGen = factorialGenerator(num);
for (var n of facGen){
	console.log("factorial generador : ", n);
}
*/
