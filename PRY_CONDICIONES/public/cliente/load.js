//cargando el archivo header

fetch("menu.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("menu").innerHTML = data));

fetch("footer.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

function cargarPaginas(url_paginas) {
  fetch(`paginas/${url_paginas}.html`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("main").innerHTML = data;
      // Después de insertar el HTML, cargamos el JS asociado
      const script = document.createElement("script");
      script.src = `js/${url_paginas}.js`;
      script.type = "text/javascript";
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `css/${url_paginas}.css`;
      document.head.appendChild(link);
     
    });
}

window.onload = () => cargarPaginas("numericos");
