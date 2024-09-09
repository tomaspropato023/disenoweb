let arregloCaracteres : string[] = new Array (14);
arregloCaracteres = ["E","T","Q","W","A","O","E","L","O","M","M","A","E","F","F"];
let arregloAEO : number[] = new Array (2);
let cantidadA : number = 0, cantidadE : number = 0, cantidadO : number = 0;
for (let i : number = 0; i < arregloCaracteres.length; i++) {
    if (arregloCaracteres[i] == "A") {
        cantidadA++;
    } 
    if (arregloCaracteres[i] == "E") {
        cantidadE++;
    }
    if (arregloCaracteres[i] == "O") {
        cantidadO++;
    }
}

arregloAEO = [cantidadA, cantidadE, cantidadO];
console.log(`En el arreglo hay ${arregloAEO[0]} As, ${arregloAEO[1]} Es y ${arregloAEO[2]} Os`);