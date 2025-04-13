/* Declarar una función con nombre calcularMayor() y pasarle como
parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los
números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un
alert también.
Invocar la función y enviar los argumentos con diferentes números para probar. */

const calcularMayor = function(a, b) {
  if (a > b)
    alert("El primer número es mayor que el segundo.");
  else if (b > a)
    alert("El segundo número es mayor que el primero.")
  else
    alert("Los dos números son iguales.")
};

calcularMayor(90, 40);