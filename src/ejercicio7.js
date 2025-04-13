/* Declarar un array denominado nombres con al menos 6 nombres.
Obtener el nombre más largo del array nombres.
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
que indica su tamaño. */

nombres = ["Leandro", "Javier", "Manuel", "Lucas", "Matias", "Luciano"];

let nombreMasLargo = 0;
let indice = 0;
let bool = true;

for (let i = 0; i < nombres.length; ++i) {
  if (bool) {
    nombreMasLargo = nombres[i].length;
    bool = false;
  }
  if (nombres[i].length > nombreMasLargo) {
    nombreMasLargo = nombres[i];
    indice = i;
  }
}

console.log("Nombre mas largo " + nombres[indice] + " tiene " + nombreMasLargo + " caracteres.");
