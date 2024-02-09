
// Funcion para validar si el dato de entrada es un numero o no lo es
function encontrarFactorial(numFactorial) {
    if (typeof numFactorial !== "number" || isNaN(numFactorial)) {
      console.error("El dato introducido no es un número válido.");
      return;
    }
  
    // Aqui realizamos un for para calcular el factorial y lo almacenamos en la variable resultado
    let resultado = 1;
    for (let i = 1; i <= numFactorial; i++) {
      resultado *= i;
    }
  
    // Mostramos una alerta en el navegador con el resultado del factorial consultado
    alert(`El factorial de ${numFactorial} es ${resultado}`);
  }
  
  // Solicitamos un numero por el navegador
  const numFactorial = parseInt(prompt("Introduzca un número:"));
  
  // Llamamos a la funcion que hicimos arriba para el factorial
  encontrarFactorial(numFactorial);