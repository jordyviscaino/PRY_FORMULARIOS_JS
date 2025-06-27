/* // Dirección
const direccionInput = document.getElementById("direccionInput");
direccionInput.addEventListener("oninput" in direccionInput ? "input" : "change", () => {
  const respuesta = document.getElementById("respuestaDireccion");
  if (direccionInput.value.toLowerCase().includes("calle")) {
    respuesta.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" width="100" alt="Casa" />';
  } else {
    respuesta.innerHTML = "No se detectó una dirección con 'calle'.";
  }
});

// Email
const emailInput = document.getElementById("emailInput");
emailInput.addEventListener("blur", () => {
  const respuesta = document.getElementById("respuestaEmail");
  const valor = emailInput.value;
  if (valor.includes("@") && valor.includes(".")) {
    respuesta.innerHTML = "Correo válido.";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Correo inválido.";
    respuesta.style.color = "red";
  }
});

// Número
const numeroInput = document.getElementById("numeroInput");
numeroInput.addEventListener("keyup", () => {
  const respuesta = document.getElementById("respuestaNumero");
  const valor = parseInt(numeroInput.value);
  if (!isNaN(valor) && valor > 10) {
    respuesta.innerHTML = "El número es mayor a 10.";
  } else {
    respuesta.innerHTML = "Debe ser mayor a 10.";
  }
});

// Contraseña
const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keyup", () => {
  const respuesta = document.getElementById("respuestaPassword");
  const valor = passwordInput.value;
  if (valor.length >= 8 && /[A-Z]/.test(valor)) {
    respuesta.innerHTML = "Contraseña segura.";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Contraseña débil.";
    respuesta.style.color = "red";
  }
});

// Teléfono
const telInput = document.getElementById("telInput");
telInput.addEventListener("keyup", () => {
  const respuesta = document.getElementById("respuestaTel");
  const valor = telInput.value.replace(/\D/g, "");
  if (valor.length === 10) {
    respuesta.innerHTML = "Teléfono válido.";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Número de teléfono incorrecto.";
    respuesta.style.color = "red";
  }
});

// URL
const urlInput = document.getElementById("urlInput");
urlInput.addEventListener("blur", () => {
  const respuesta = document.getElementById("respuestaUrl");
  const valor = urlInput.value;
  if (valor.startsWith("http")) {
    respuesta.innerHTML = `<a href="${valor}" target="_blank">Visitar enlace</a>`;
  } else {
    respuesta.innerHTML = "URL inválida.";
  }
});

// Comentario
const comentarioInput = document.getElementById("comentarioInput");
comentarioInput.addEventListener("input", () => {
  const respuesta = document.getElementById("respuestaComentario");
  const valor = comentarioInput.value;
  if (valor.length > 20) {
    respuesta.innerHTML = "Comentario extenso";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Comentario muy corto";
    respuesta.style.color = "gray";
  }
});
 */


// Dirección
const direccionInput = document.getElementById("direccionInput");

direccionInput.oninput = function () {
  const respuesta = document.getElementById("respuestaDireccion");
  if (direccionInput.value.toLowerCase().includes("calle")) {
    respuesta.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" width="100" alt="Casa" />';
  } else {
    respuesta.innerHTML = "No se detectó una dirección con 'calle'.";
  }
};

direccionInput.onchange = function () {
  direccionInput.style.border = "2px solid orange";
};

direccionInput.onblur = function () {
  direccionInput.style.backgroundColor = "#f0f0f0";
};

direccionInput.onfocus = function () {
  direccionInput.style.backgroundColor = "#e0ffe0";
};

direccionInput.onkeydown = function () {
  console.log("Tecla presionada en dirección");
};

direccionInput.onkeyup = function () {
  console.log("Tecla soltada en dirección");
};

direccionInput.onkeypress = function () {
  console.log("Se está escribiendo dirección");
};

// Email
const emailInput = document.getElementById("emailInput");

emailInput.oninput = function () {
  emailInput.style.borderColor = "blue";
};

emailInput.onchange = function () {
  emailInput.style.backgroundColor = "#ddf";
};

emailInput.onblur = function () {
  const respuesta = document.getElementById("respuestaEmail");
  const valor = emailInput.value;
  if (valor.includes("@") && valor.includes(".")) {
    respuesta.innerHTML = "Correo válido.";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Correo inválido.";
    respuesta.style.color = "red";
  }
};

// Número
const numeroInput = document.getElementById("numeroInput");

numeroInput.oninput = function () {
  numeroInput.style.backgroundColor = "#fff9c4";
};

numeroInput.onchange = function () {
  numeroInput.style.border = "2px solid green";
};

numeroInput.onkeyup = function () {
  const respuesta = document.getElementById("respuestaNumero");
  const valor = parseInt(numeroInput.value);
  if (!isNaN(valor) && valor > 10) {
    respuesta.innerHTML = "El número es mayor a 10.";
  } else {
    respuesta.innerHTML = "Debe ser mayor a 10.";
  }
};

// Contraseña
const passwordInput = document.getElementById("passwordInput");

passwordInput.onkeypress = function () {
  console.log("Presionando una tecla en contraseña");
};

passwordInput.onkeyup = function () {
  const respuesta = document.getElementById("respuestaPassword");
  const valor = passwordInput.value;
  if (valor.length >= 8 && /[A-Z]/.test(valor)) {
    respuesta.innerHTML = "Contraseña segura.";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Contraseña débil.";
    respuesta.style.color = "red";
  }
};

passwordInput.onblur = function () {
  passwordInput.style.border = "2px dashed red";
};

// Teléfono
const telInput = document.getElementById("telInput");

telInput.oninput = function () {
  telInput.style.backgroundColor = "#e0f7fa";
};

telInput.onkeyup = function () {
  const respuesta = document.getElementById("respuestaTel");
  const valor = telInput.value.replace(/\D/g, "");
  if (valor.length === 10) {
    respuesta.innerHTML = "Teléfono válido.";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Número de teléfono incorrecto.";
    respuesta.style.color = "red";
  }
};

// URL
const urlInput = document.getElementById("urlInput");

urlInput.oninput = function () {
  urlInput.style.border = "1px solid blue";
};

urlInput.onblur = function () {
  const respuesta = document.getElementById("respuestaUrl");
  const valor = urlInput.value;
  if (valor.startsWith("http")) {
    respuesta.innerHTML = `<a href="${valor}" target="_blank">Visitar enlace</a>`;
  } else {
    respuesta.innerHTML = "URL inválida.";
  }
};

// Comentario
const comentarioInput = document.getElementById("comentarioInput");

comentarioInput.oninput = function () {
  const respuesta = document.getElementById("respuestaComentario");
  const valor = comentarioInput.value;
  if (valor.length > 20) {
    respuesta.innerHTML = "Comentario extenso";
    respuesta.style.color = "green";
  } else {
    respuesta.innerHTML = "Comentario muy corto";
    respuesta.style.color = "gray";
  }
};

comentarioInput.onkeyup = function () {
  comentarioInput.style.border = "1px dashed gray";
};

comentarioInput.onfocus = function () {
  comentarioInput.style.backgroundColor = "#fff";
};

comentarioInput.onblur = function () {
  comentarioInput.style.backgroundColor = "#eee";
};
