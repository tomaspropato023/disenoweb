import * as rls from 'readline-sync';

let numero : number = rls.questionInt("Ingrese un numero: ");

function esMultiplo(multiplo: number, divisor: number): boolean{
    return multiplo % divisor == 0;
}

function cantidadDeDivisores(numero : number): number {
    let contador : number = 0;
        for (let index = 1; index <= numero; index++) {
            if (esMultiplo(numero, index)) {
                contador++;
            }
        }
    return contador;
}

console.log("La cantidad de divisores es: ",cantidadDeDivisores(numero));