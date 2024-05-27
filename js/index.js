const OPCIONES = [
  { nombre: "jab", saludo: "Hola" },
  { nombre: "Ana", saludo: "Buenos días" },
  { nombre: "Luis", saludo: "Buenas tardes" },
  { nombre: "María", saludo: "Buenas noches" },
  { nombre: "Carlos", saludo: "Saludos" },
  { nombre: "Sofía", saludo: "Qué tal" },
  { nombre: "Juan", saludo: "Hola, ¿cómo estás?" },
  { nombre: "Elena", saludo: "Hola a todos" },
  { nombre: "Miguel", saludo: "Hola, buen día" }
];

document.querySelector(".boton").addEventListener("click", analizar);

function analizar() {
  // Get the value from the input
  const NOMBRE = document.querySelector("#nombre").value.trim();
  const OBJETO=OPCIONES.find(valor=>valor.nombre===NOMBRE)
  console.log(OBJETO)
 
  // Ejemplo5


  escribir(OBJETO.saludo);
  
}

// Check if the value is correct
//   if (NOMBRE === CORRECTO) {
//     escribir("Correcto");
//   } else {
//     escribir("Incorrecto");
//   }
// }

function escribir(valor) {
  document.querySelector(".caja2").innerHTML = valor;
}
