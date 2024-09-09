let contenedor = document.getElementById("contenedor");
/* let elemento = document.createElement("h2");
let texto = document.createTextNode("AGUANTE BOKA");
elemento.appendChild(texto);
contenedor.appendChild(texto) */
let lista = document.getElementById("lista");

const productos = ["Pan", "Leche", "Carne", "Papas", "Jamon"];
const precios = [2000, 1000, 6000, 3000, 5000];

function pintarProductos (arrayProductos, arrayPrecios) {
    for (let i = 0; i < arrayProductos.length; i++) {
        let listItem = document.createElement("li")
        let texto = document.createTextNode(`Nombre: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`);
        listItem.appendChild(texto)
        lista.appendChild(listItem)
    }
}

function crearImagen(url, textoAlternativo) {
    let img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("alt", textoAlternativo);
    contenedor.appendChild(img);
    
}
pintarProductos(productos, precios)

crearImagen("./js.png", Si)