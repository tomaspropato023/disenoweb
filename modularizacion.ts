import * as rls from 'readline-sync';

let numero1 : number = rls.questionInt("Ingrese un numero: ");
let numero2 : number = rls.questionInt("Ingrese otro numero: ");
let opcionMenu : number = rls.questionInt("Presione 1 para sumar los numeros o presione 2 para restarlos, presione cualquier otra tecla para salir: ");

function dibujarGuiones(cantidad:number){
    let i : number;
    let linea : string = "-";
    for (i = 0; i <= cantidad; i++){
        linea = linea + "-";
    };
    console.log(linea);
}


if (opcionMenu == 1) {
    dibujarGuiones(40);
    console.log("El resultado es:",(numero1+numero2));
    dibujarGuiones(40)
} else if (opcionMenu == 2) {
    dibujarGuiones(40);
    console.log("El resultado es:",(numero1-numero2));
    dibujarGuiones(40);
}