/* valores correctos:
brendan eich (creador de JavaScript)
Ha trabajado en las empresas: netscape y brave
*/

const NOMBRE="brendan";
const APELLIDO="eich";
const EMPRESA1="netscape";
const EMPRESA2="brave";

// Si el nombre escrito por el usuario es "brendan", el apellido es "eich" y ha trabajado en "netscape" o en "brave": escribe "Hola" y sino "Adios".

document.querySelector(".boton").addEventListener("click", function () {
  const NOMBRE = "brendan";
  const APELLIDO = "eich";
  const EMPRESA1 = "netscape";
  const EMPRESA2 = "brave";

  const nombreUsuario = document.getElementById("nombre").value.toLowerCase();
  const apellidoUsuario = document
    .getElementById("apellido")
    .value.toLowerCase();
  const empresaUsuario = document.getElementById("empresa").value.toLowerCase();

  const caja2 = document.querySelector(".caja2");

  if (
    nombreUsuario === NOMBRE &&
    apellidoUsuario === APELLIDO &&
    (empresaUsuario === EMPRESA1 || empresaUsuario === EMPRESA2)
  ) {
    caja2.textContent = "Hola";
  } else {
    caja2.textContent = "Adios";
  }
});
