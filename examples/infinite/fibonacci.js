'use strict';
function* fibonacciGen (n) {
	var current = 0, next = 1, swap;
	for (var i = 0; i < n; i++) {
		swap = current;
		current = next;

		next = swap + next;
		yield current;
	}
}



for(var n of fibonacciGen(20)){
	console.log(n);
}
