// Fecha
const fechaInput = document.getElementById("fechaInput");

fechaInput.onchange = function () {
  const contenedor = fechaInput.closest(".contenido1");
  const respuesta = document.getElementById("respuestaFecha");

  const valor = new Date(fechaInput.value);
  const hoy = new Date();
  const edad = hoy.getFullYear() - valor.getFullYear();
  const mes = valor.getMonth() + 1;

  // Temporada (opcional)
  let fondo = "";
  if ([6, 7, 8].includes(mes)) {
    respuesta.innerHTML = "Es verano.";
    respuesta.style.color = "yellow";
    fondo = "https://concepto.de/wp-content/uploads/2018/08/verano1-e1535637769656.jpg"; // verano
  } else if ([9, 10, 11].includes(mes)) {
      respuesta.innerHTML = "Es otonio.";
    respuesta.style.color = "orange";
    fondo = "https://th.bing.com/th/id/OIP.dH9ezvkk36pg190c1pISOgHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"; // otoño
  } else if ([12, 1, 2].includes(mes)) {
      respuesta.innerHTML = "Es invierno.";
    respuesta.style.color = "skyblue";
    fondo = "https://th.bing.com/th/id/OIP.qLIEYImsrXhjJOZh-QMbVQHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"; // invierno
  } else {
       respuesta.innerHTML = "Es primavera.";
    respuesta.style.color = "pink";
    fondo = "https://th.bing.com/th/id/OIP.ozccMfhyowm6DorwIedMrwHaEv?r=0&w=700&h=448&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"; // primavera
  }

  contenedor.style.backgroundImage = `url(${fondo})`;
  contenedor.style.backgroundSize = "100%";
  contenedor.style.backgroundRepeat = "no-repeat";
  contenedor.style.backgroundPosition = "right bottom";


};

fechaInput.onblur = () => console.log("Perdiste el foco en fecha");
fechaInput.onfocus = () => console.log("Estás escribiendo una fecha");


// Hora
const horaInput = document.getElementById("horaInput");

horaInput.onchange = function () {
  const respuesta = document.getElementById("respuestaHora");
  const horaActual = new Date();
  const [h, m] = horaInput.value.split(":").map(Number);
  const horaSeleccionada = new Date();
  horaSeleccionada.setHours(h, m, 0);

  const diffMs = horaSeleccionada - horaActual;
  const diffHrs = diffMs / (1000 * 60 * 60);

  if (diffHrs < 0) {
    respuesta.innerHTML = "Hora inválida: ya pasó.";
    respuesta.style.color = "red";
  } else if (diffHrs < 8) {
    alert("¡Deberías dormir más!");
    respuesta.innerHTML = "Poco tiempo de descanso.";
    respuesta.style.color = "orange";
  } else {
    respuesta.innerHTML = "Alarma establecida. ¡Aprovecha el tiempo!";
    respuesta.style.color = "green";
  }
};

horaInput.onblur = () => console.log("Hora fijada.");


// Rango
const rangoInput = document.getElementById("rangeInput");

rangoInput.oninput = function () {
  const contenedor = rangoInput.closest(".contenido1");
  const valor = parseFloat(rangoInput.value);
  contenedor.style.backgroundColor = `rgba(0, 128, 128, ${valor / 100})`;

  document.getElementById("respuestaRango").innerHTML = `Transparencia: ${valor}%`;
};

rangoInput.onchange = () => console.log("Rango cambiado");


// Color
const colorInput = document.getElementById("colorInput");

colorInput.oninput = function () {
  const contenedor = colorInput.closest(".contenido1");
  contenedor.style.backgroundColor = colorInput.value;
  document.querySelector("#respuestaColor span").textContent = colorInput.value;
};

colorInput.onchange = function () {
  colorInput.style.border = "2px solid " + colorInput.value;
};

// Archivo
const archivoInput = document.getElementById("archivoInput");

archivoInput.onchange = function () {
  const respuesta = document.getElementById("respuestaArchivo");
  const archivo = archivoInput.files[0];

  if (!archivo) {
    respuesta.innerHTML = "No se seleccionó archivo.";
    return;
  }

  const pesoMB = archivo.size / (1024 * 1024);

  if (pesoMB > 5) {
    respuesta.innerHTML = `Archivo demasiado pesado (${pesoMB.toFixed(2)} MB).`;
    respuesta.style.color = "red";
  } else {
    respuesta.innerHTML = `Archivo correcto (${pesoMB.toFixed(2)} MB).`;
    respuesta.style.color = "green";
  }
};

archivoInput.onclick = () => console.log("Click en input de archivo");
archivoInput.onblur = () => console.log("Input archivo perdió el foco");

