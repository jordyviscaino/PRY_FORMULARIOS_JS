function enviarFormulario() {
  const nombreInput = document.getElementById("nombreForm");
  const emailInput = document.getElementById("emailForm");
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const respuesta = document.getElementById("respuestaForm");

  if (!nombre || !email) {
    respuesta.innerHTML = "Por favor, completa todos los campos.";
    respuesta.style.color = "red";
    if (!nombre) aplicarParpadeoDesdeInput(nombreInput);
    if (!email) aplicarParpadeoDesdeInput(emailInput);
    return false;
  } else {
    respuesta.innerHTML = `Formulario enviado correctamente. ¡Gracias, ${nombre}!`;
    respuesta.style.color = "green";
    return false;
  }
}


function reiniciarFormulario() {
  document.getElementById("respuestaForm").innerHTML = "Formulario reiniciado.";
}

function escribiendoFormulario() {
  console.log("Escribiendo...");
}

function cambioFormulario() {
  console.log("Cambió algo en el formulario.");
}

function verificarUsuario() {
  const nombreInput = document.getElementById("nombreForm");
  const emailInput = document.getElementById("emailForm");
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const respuesta = document.getElementById("respuestaBoton");

  if (nombre && email) {
    respuesta.innerHTML = '<div class="anim-verificando">Verificando...</div>';
    setTimeout(() => {
      respuesta.innerHTML = `<span style="color: green;">¡Usuario disponible!</span>`;
    }, 2000);
  } else {
    respuesta.innerHTML = `<span style="color: red;">Faltan campos por completar.</span>`;
    if (!nombre) aplicarParpadeoDesdeInput(nombreInput);
    if (!email) aplicarParpadeoDesdeInput(emailInput);
  }
}



function aplicarParpadeoDesdeInput(input) {
  const contenedor = input.closest(".contenido1");
  if (contenedor) {
    contenedor.classList.add("parpadeo-rojo");
    setTimeout(() => {
      contenedor.classList.remove("parpadeo-rojo");
    }, 600);
  }
}

// BOTÓN ESTILOS
function resaltarBoton() {
  document.getElementById("botonPersonalizado").style.backgroundColor = "#ddf";
}
function presionarBoton() {
  document.getElementById("botonPersonalizado").style.transform = "scale(0.95)";
}
function soltarBoton() {
  document.getElementById("botonPersonalizado").style.transform = "scale(1)";
}
function enfocarBoton() {
  document.getElementById("botonPersonalizado").style.border = "2px solid purple";
}
