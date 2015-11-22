var generador1 = function*() {
  yield 'generador1 - 2';
  yield 'generador1 - 3';
}

var generador2 = function*() {
  yield 'generador2 - 1';
  yield* generador1();
  yield 'generador2 - 4';
}

var iterator = generador2();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
