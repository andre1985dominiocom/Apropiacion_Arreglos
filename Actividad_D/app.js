// Arreglo de Objetos (Integración)
// a. Construyan un arreglo llamado inventario que contenga al menos 3 objetos,
// cada uno representando un elemento diferente (por ejemplo, cuadernos, teclados, audífonos, etc.).
// b. Cada objeto debe tener mínimo 3 propiedades.
// c. Recorra el arreglo usando for...of e imprima una propiedad específica de cada objeto,
// por ejemplo, su nombre o su uso principal.

// Arreglo de objetos representando el inventario
const inventario = [

    // Objeto 1: Cuaderno
    {
        nombre: "Cuaderno",
        usoPrincipal: "Escribir notas y apuntes",
        cantidad: 50
    },

    // Objeto 2: Teclado
    {
        nombre: "Teclado",
        usoPrincipal: "Escribir en la computadora",
        cantidad: 20
    },

    // Objeto 3: Audífonos
    {
        nombre: "Audífonos",
        usoPrincipal: "Escuchar música o audio",
        cantidad: 30
    }
];

// Recorriendo el arreglo con for...of e imprimiendo el nombre y uso principal de cada objeto
for (const item of inventario) {
    console.log('-------------------------');
    console.log(`Nombre: ${item.nombre}`);
    console.log(`Uso Principal: ${item.usoPrincipal}`);
    console.log(`Cantidad: ${item.cantidad}`);
    console.log('-------------------------');
}