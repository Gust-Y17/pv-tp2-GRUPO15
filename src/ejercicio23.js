 
const botones = document.getElementsByName('lenguaje_fav');
const resultadoDiv = document.getElementById('resultado');
 

function mostrarSeleccion(valor) 
{   if (resultadoDiv) 
      {resultadoDiv.innerHTML =  `<p>Has seleccionado ${valor}</p>`;} 
}

function eventos()
 {
    for (let i = 0; i < botones.length ; i++) 
    {
        botones[i].addEventListener('change', function() {
            if (this.checked) {
                mostrarSeleccion(this.value);
            }
        });
    }
}
 eventos();
  