import fs from 'node:fs';

const nombres : string[] = ["Juan", "Amelia", "Nicolas", "Carla"];
let contenido : string = "";
for (let i : number = 0; i < nombres.length; i++) {
    contenido += `${nombres[i]} `
}
fs.writeFileSync('./test.txt', contenido);
console.log("Exito.");

const datos = fs.readFileSync('./test.txt', "utf-8");
let datos2 : string = datos.trim();
const arrayNuevo : string[] = datos2.split(" ");
console.log(arrayNuevo)