const mostrarMes=(num)=> {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    if (num >= 1 && num <= 12) {
      console.log(meses[num - 1]);
    } else {
      console.log("No es un mes válido");
    }
  }
  
  mostrarMes(7);   // Julio
  mostrarMes(15);  // No es un mes válido