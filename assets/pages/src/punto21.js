const entrada = document.getElementById("entrada");
const salida = document.getElementById("resultado");

entrada.addEventListener("input", function(){
salida.textContent = entrada.value;
}
);