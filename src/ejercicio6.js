/* Crear un array denominado edades con al menos 8 edades distintas.
Recorrer el array y obtener el promedio de las edades del array. */

edades = [20, 19, 23, 31, 17, 18, 39, 45];

let sumaTotal = 0;
let cantidad = 0;

for (let i = 0; i < edades.length; ++i) {
  sumaTotal += edades[i];
  ++cantidad;
}

console.log("Suma total = " + sumaTotal);
console.log("Cantidad total = " + cantidad);
console.log("Promedio = " + sumaTotal/cantidad);