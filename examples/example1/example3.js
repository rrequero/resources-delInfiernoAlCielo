var saluda = function *(){
	var name = yield "¿Cual es tu nombre?"; // [1]
	if(name && name !== ""){
		return "Hola " + name + "!";
	}
	throw new Error("El nombre no puede ser vacio");
};

var generator = saluda();

setTimeout(function(){
	try{
		console.log(generator.next().value); //[2]
		console.log(generator.next().value); //[3]
	}catch(e){
		console.log(e);
	}
}, 1000);
