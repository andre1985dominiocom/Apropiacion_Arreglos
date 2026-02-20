// C) Construcción y Lectura de Objetos
// En pareja, elijan un elemento compartido en su entorno
// (puede ser: computador del aula, una libreta, una prenda, una herramienta, etc.).
// a. Construyan un objeto en JavaScript con al menos 4 propiedades que lo describan.
// b. Muestren en consola cada una de sus propiedades de forma individual.
// c. Escriban una reflexión compartida:
// i. ¿Por qué un objeto representa mejor a ese elemento que un arreglo?

// Objetos en javascript para describir una herramienta
const herramienta = {
    nombre: "Martillo",
    tipo: "Manual",
    material: "Acero",
    uso: "Clavar clavos"
};

// Mostrar en consola cada una de sus propiedades de forma individual
console.log("Nombre: ", herramienta.nombre);
console.log("Tipo: ", herramienta.tipo);
console.log("Material: ", herramienta.material);
console.log("Uso: ", herramienta.uso);

// Reflexión compartida:
// Un objeto representa mejor a este elemento que un arreglo
// porque un objeto permite organizar la información de manera más estructurada y clara,
// utilizando propiedades con nombres específicos que describen cada característica del elemento.
// En cambio, un arreglo solo podría contener valores sin una relación clara entre ellos,
// lo que dificultaría la comprensión y el acceso a la información relevante sobre el elemento.