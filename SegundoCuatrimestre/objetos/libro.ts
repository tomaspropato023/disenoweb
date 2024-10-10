export class Libro {
    private nombre: string;
    private autor: string;
    private anioEdicion: number;

    constructor(_nombre:string,_autor:string,_anioEdicion:number){
        this.nombre = _nombre;
        this.autor = _autor;
        this.anioEdicion = _anioEdicion;
    }

    public getNombre():string{
        return this.nombre
    }

    public getAutor():string{
        return this.autor
    }

    public getAnioEdicion():number{
        return this.anioEdicion
    }

    public setNombre(nombre: string):void{
        this.nombre = nombre
    }

    public setAutor(autor: string):void{
        this.autor = autor
    }

    public setAnioEdicion(anioEdicion:number):void{
        this.anioEdicion = anioEdicion
    }
}