const boton = document.getElementById("boton");
const parrafo = document.getElementById("texto1");

boton.addEventListener("click", () => {
  parrafo.textContent = "El texto ha sido cambiado con éxito";
});