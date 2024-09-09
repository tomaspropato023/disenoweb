import * as rls from 'readline-sync';

let numero1 : number = rls.questionInt("Ingrese un numero: ");
let numero2 : number = rls.questionInt("Ingrese otro numero: ");
let opcionMenu : number = rls.questionInt("Presione 1 para sumar los numeros o presione 2 para restarlos, presione cualquier otra tecla para salir: ");

function dibujarGuionesN(cantidad:number){
    let i : number;
    let linea : string = "-";
    for (i = 0; i <= cantidad; i++){
        linea = linea + "-";
    };
    console.log(linea);
}

function calcularResultado (numero1 : number, numero2 : number, opcionMenu: number):number {
    let resultado : number = 0;
if (opcionMenu == 1) {
    resultado = numero1 + numero2;
} else if (opcionMenu == 2){
    resultado = numero1 - numero2;
}
return resultado;
}

let resultadoFunc : number = 0
resultadoFunc = calcularResultado (numero1, numero2, opcionMenu);

dibujarGuionesN (resultadoFunc);
console.log("El resultado es", resultadoFunc);
dibujarGuionesN (resultadoFunc);