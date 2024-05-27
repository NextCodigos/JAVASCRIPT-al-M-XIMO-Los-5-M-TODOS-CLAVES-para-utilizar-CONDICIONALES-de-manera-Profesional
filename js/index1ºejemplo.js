const CORRECTO = "jab";

document.querySelector(".boton").addEventListener("click", analizar);

function analizar() {
  // Get the value from the input
  const NOMBRE = document.querySelector("#nombre").value.trim();

  // Ternarios Ejejmplo1

  // (NOMBRE===CORRECTO)
  // ? escribir("Hola")
  // : escribir("Adios")
  // }

  // Ejemplo 2 solo permite una unica opcion

  // (NOMBRE===CORRECTO)
  // && escribir("Hola")

  // Ejemplo3 switch, si pongo "5" en case me dice hola,no puedo poner numero tiene que ser string

  // switch(NOMBRE){
  //     case "jab":
  //         escribir("Hola");
  //         break;
  //     case "rosa":
  //         escribir("Adios");
  //         break;
  //     case "martin":
  //         escribir("Hasta luego");
  //         break;
  //     case "5":
  //         escribir("soy el 5");
  //         break;
  //     default:
  //         escribir("Valor por defecto")
  // }

  // Ejemplo4

  if (NOMBRE === "jab") {
    escribir("Hola");
  } else if (NOMBRE === "rosa") {
    escribir("Adios");
  } else if (NOMBRE === "martin") {
    escribir("Hasta luego");
  } else if (NOMBRE == 5) {
    escribir("Soy el 5");
  } else {
    escribir("en el else");
  }
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
