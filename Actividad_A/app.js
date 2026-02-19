// a) Manipulación de Arreglos
// a. Cree un arreglo llamado verduras con al menos 4 elementos.
// b. Realice las siguientes operaciones y muestre el resultado en consola después de cada una:
// push() // agregar un nuevo elemento al final
// pop() // eliminar el último elemento
// unshift() // agregar un nuevo elemento al inicio
// shift() // eliminar el primer elemento
// c. Finalmente, muestre cuántos elementos contiene el arreglo usando length.

export { verduras };

// Crear el arreglo de verduras
let verduras = ["lechuga", "tomate", "zanahoria", "pepino"];

// Agregar un nuevo elemento al final con push()
verduras.push("espinaca");
console.log(verduras);

// Eliminar el último elemento con pop()
verduras.pop();
console.log(verduras);

// Agregar un nuevo elemento al inicio con unshift()
verduras.unshift("repollo");
console.log(verduras);

// Eliminar el primer elemento con shift()
verduras.shift();

// Mostrar el arreglo después de las operaciones
console.log(verduras);

// Mostrar cuántos elementos contiene el arreglo usando length
console.log(verduras.length);