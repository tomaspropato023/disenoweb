import { Libro } from "./libro";

export class gestorLibro {
    private nombre: string;
    private listaLibros: Libro[];
    
    constructor(nombre:string){
        this.nombre = nombre;
        this.listaLibros = [];
    }

    public getNombre():string{
        return this.nombre;
    }
    public getListaLibros(): Libro[] {
        const copiaLibros:Libro[]=this.listaLibros.map(lib=>({...lib}) as Libro)
        return this.listaLibros;
    }

    
    public setNombre(nombre:string):void{
        this.nombre = nombre
    }

    public setListaLibros(listaLibros: Libro[]):void{
        this.listaLibros = listaLibros
    }

    public eliminarLibro(libroAEliminar: Libro):void{
        if(libroAEliminar != undefined && this.listaLibros.includes(libroAEliminar)&&libroAEliminar.getNombre().length) {
            const posicion:number = this.listaLibros.indexOf(libroAEliminar);
            this.listaLibros.slice(posicion,1);
        }
    }

    public agregarLibro(nombre:string,autor:string,anio:number):void{
        let nuevoLibro:Libro = new Libro(nombre, autor, anio);
        if (!this.listaLibros.some(lib=> lib.getNombre()== nombre && lib.getAutor()== autor && lib.getAnioEdicion()==anio)) {
            this.listaLibros.push(nuevoLibro)
        };
    }
}