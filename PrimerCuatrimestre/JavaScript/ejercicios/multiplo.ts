function esMultiplo(num: number, multiploDe: number): boolean {
    return num % multiploDe === 0
}

let multiplo : boolean = esMultiplo(12,4)
console.log(multiplo)