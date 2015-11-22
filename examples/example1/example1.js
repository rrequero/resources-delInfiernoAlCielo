var saluda = function *(){   //[1]
	console.log("Hola a todos");
};

var generator = saluda(); //[2]

setTimeout(function(){
	generator.next(); //[3]
}, 1000);
