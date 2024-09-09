import * as rls from 'readline-sync';

let primerNumero : number = rls.questionInt ("Ingrese un numero: ");
let segundoNumero : number = rls.questionInt ("Ingrese un segundo numero: ");
let tercerNumero : number = rls.questionInt ("Ingrese un ultimo numero: ");

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log(primerNumero,"es mayor que",segundoNumero,"y",tercerNumero);
}
if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log(segundoNumero,"es mayor que",primerNumero,"y",tercerNumero);
}
if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
    console.log(tercerNumero,"es mayor que",primerNumero,"y",segundoNumero);
}