/* valores correctos:
brendan eich (creador de JavaScript)
Ha trabajado en las empresas: netscape y brave
*/

const NOMBRE = "brendan";
const APELLIDO = "eich";
const EMPRESA1 = "netscape";
const EMPRESA2 = "brave";

// Si el nombre escrito por el usuario es "brendan", el apellido es "eich" y ha trabajado en "netscape" o en "brave": escribe "Hola" y sino "Adios".

document.querySelector(".boton").addEventListener("click", leer);

function leer() {
  const CAMPO1 = document.querySelector("#nombre").value.trim().toLowerCase();
  const CAMPO2 = document.querySelector("#apellido").value.trim().toLowerCase();
  const CAMPO3 = document.querySelector("#empresa").value.trim().toLowerCase();

  if (
    CAMPO1 === NOMBRE &&
    CAMPO2 === APELLIDO &&
    (CAMPO3 === EMPRESA1 || CAMPO3 === EMPRESA2)
  ) {
    document.querySelector(".caja2").innerHTML = "Hola";
  } else {
    document.querySelector(".caja2").innerHTML = "Adios";
  }
}
