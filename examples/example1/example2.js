var saluda = function *(){
    var name = yield "¿Cual es tu nombre?"; // [1]
	return "Hola " + name + "!";
};

var generator = saluda();

setTimeout(function(){
	console.log(generator.next().value); //[2]
	console.log(generator.next("Ra").value); //[3]
}, 1000);
