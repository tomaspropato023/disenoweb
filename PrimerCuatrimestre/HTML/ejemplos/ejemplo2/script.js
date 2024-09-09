"use strict";
function cambiarTexto() {
    let titulo = document.querySelector("#inputTexto").value;
    document.getElementById("titulo").innerText = titulo;
}


/* document.querySelector("#titulo"); ID = #
document.getElementById('titulo'); para encontrar elemento con X clase */