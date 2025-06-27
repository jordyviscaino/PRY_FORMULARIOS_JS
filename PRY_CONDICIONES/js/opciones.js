// Checkbox
const opcionNoticias = document.getElementById("opcionNoticias");
const opcionMusica = document.getElementById("opcionMusica");

function actualizarPreferencias() {
  const contenedor = opcionNoticias.closest(".contenido1");
  const respuesta = document.getElementById("respuestaCheckbox");

  const noticias = opcionNoticias.checked;
  const musica = opcionMusica.checked;

  if (noticias && musica) {
    respuesta.innerHTML = "¡Estás suscrito a Noticias y Música!";
    respuesta.style.color = "#4caf50";
    contenedor.style.backgroundImage = 'url("https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg")';
    contenedor.style.backgroundSize = "contain";
    contenedor.style.backgroundRepeat = "no-repeat";
    contenedor.style.backgroundPosition = "right center";
  } else if (noticias) {
    respuesta.innerHTML = "Estás suscrito a noticias.";
    respuesta.style.color = "blue";
    contenedor.style.background = "#e3f2fd";
  } else if (musica) {
    respuesta.innerHTML = "Te gusta la música.";
    respuesta.style.color = "#8e24aa";
    contenedor.style.background = "#f3e5f5";
  } else {
    respuesta.innerHTML = "No has seleccionado preferencias.";
    respuesta.style.color = "gray";
    contenedor.style.background = "transparent";
  }
}

// Eventos
opcionNoticias.onchange = actualizarPreferencias;
opcionMusica.onchange = actualizarPreferencias;


// Radio
const generoH = document.getElementById("generoH");
const generoM = document.getElementById("generoM");

function actualizarGenero() {
  const contenedor = generoH.closest(".contenido1");
  const respuesta = document.getElementById("respuestaRadio");

  if (generoH.checked) {
    respuesta.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" width="40" alt="Hombre" />';
    contenedor.style.color = "#1565c0"; // azul fuerte
  } else if (generoM.checked) {
    respuesta.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/1995/1995659.png" width="40" alt="Mujer" />';
    contenedor.style.color = "#c2185b"; // rosado
  }
}

// Eventos
generoH.onchange = actualizarGenero;
generoM.onchange = actualizarGenero;


// Select
const selectPais = document.getElementById("selectPais");

selectPais.onchange = function () {
  const respuesta = document.getElementById("respuestaSelect");
  const val = selectPais.value;
  if (val === "ec") {
    respuesta.innerHTML = '<img src="https://flagcdn.com/w80/ec.png" alt="Ecuador">';
  } else if (val === "us") {
    respuesta.innerHTML = '<img src="https://flagcdn.com/w80/us.png" alt="USA">';
  } else if (val === "jp") {
    respuesta.innerHTML = '<img src="https://flagcdn.com/w80/jp.png" alt="Japón">';
  } else {
    respuesta.innerHTML = "Selecciona un país.";
  }
};

selectPais.onclick = function () {
  console.log("Click en el selector de país");
};

selectPais.onfocus = function () {
  selectPais.style.border = "2px solid green";
};

selectPais.onblur = function () {
  selectPais.style.border = "1px solid gray";
};
