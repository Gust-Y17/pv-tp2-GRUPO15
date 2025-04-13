let kilometros = Number(window.prompt("ingrese número de kilometros recorridos"));
let combustible = Number(window.prompt("ingrese los litros de combustible que consumio su vehiculo durante el recorrido"));
let combustibleXkm = (combustible/kilometros);
alert("usted gastó " + combustibleXkm + "L de Combustible por Kilometro");