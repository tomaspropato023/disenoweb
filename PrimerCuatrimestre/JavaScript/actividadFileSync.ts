import fs from 'node:fs';

const precios : number[] = [525, 3500, 400, 1999];
const productos : string[] = ["Leche", "Galletitas", "Harina", "Queso"];

let stringPrecios : string = "";
let stringProductos : string = "";
for (let i : number = 0; i < 4; i++) {
    stringPrecios += `${precios[i]} `
    stringProductos += `${productos[i]} `
}

fs.writeFileSync('./precios.txt', stringPrecios)
fs.writeFileSync('./productos.txt', stringProductos)
console.log("Los datos fueron guardados con éxito.");

const datosDePrecios = fs.readFileSync('./precios.txt', "utf-8");
let datoPrecios : string = datosDePrecios.trim()
let arrayPrecios : string[] = datoPrecios.split(" ")

const datosDeProductos = fs.readFileSync('./productos.txt', "utf-8");
let datoProductos : string = datosDeProductos.trim();
let arrayProductos : string[] = datoProductos.split(" ");

console.log("Mostrando arreglo de precios...");
console.log(arrayPrecios);
console.log("Mostrando arreglo de productos...");
console.log(arrayProductos);
