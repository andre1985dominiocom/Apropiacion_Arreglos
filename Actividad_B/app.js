// b) Recorridos del Arreglo
// Con el arreglo resultante de la actividad anterior:
// a. Recorra el arreglo utilizando for mostrando posición y valor.
// b. Luego, recórrelo utilizando for...of, mostrando únicamente los valores.
// c. En pareja, discutan y escriban una conclusión breve:
// i. ¿Cuándo es más útil for?
// ii. ¿Cuándo es más útil for...of?

import { verduras } from "../Actividad_A/app.js";

// Recorrer el arreglo utilizando for mostrando posición y valor
for (let i = 0; i < verduras.length; i++) {
    console.log(`Posición: ${i}, Valor: ${verduras[i]}`);
}

// Recorrer el arreglo utilizando for...of, mostrando únicamente los valores
for (let verdura of verduras) {
    console.log(`Valor: ${verdura}`);
}

// Conclusión breve:
// i. El bucle for es más útil cuando necesitamos acceder a la posición de los elementos del arreglo,
// ya que nos permite usar un índice para obtener tanto la posición como el valor.
// ii. El bucle for...of es más útil cuando solo necesitamos acceder a los valores del arreglo
// sin preocuparnos por las posiciones, lo que hace el código más limpio y fácil de leer.