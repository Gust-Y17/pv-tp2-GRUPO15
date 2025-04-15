let inicio=Number(window.prompt("Ingrese un numero Inicial"));
let final=Number(window.prompt("Ingrese un numero para el final"));

function sumarRango(NumInicial,NumFinal){

if(NumInicial > NumFinal){
console.log("El numero Inicial tienen que ser menor o igual al numero final");
}
let suma=0;
for (let i=NumInicial; i<=NumFinal; i++){
     suma +=i;
}

return suma;

}

let ResultadoFinal=sumarRango(inicio,final);
alert("Su suma del Rango es: " + ResultadoFinal);