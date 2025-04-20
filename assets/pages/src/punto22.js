const input = document.getElementById("text2");

const salida = document.getElementById("SalidaTexto");

input.addEventListener("input", function () {

const texto= input.value;
salida.textContent =texto;

if(texto.length > 20) {
    salida.style.backgroundColor = "#f8d7da";
}else{
    salida.style.backgroundColor = "transparent";
}

}
)