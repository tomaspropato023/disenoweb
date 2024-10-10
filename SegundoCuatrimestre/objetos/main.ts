import { Libro } from "./libro";
import { gestorLibro } from "./gestorLibros";

let MartinFierro:Libro = new Libro("Martin Fierro", "Jose Hernández", 1872);

let gestorLibro1:gestorLibro=new gestorLibro("GestorOlavarria")

gestorLibro1.agregarLibro("Martin Fierro", "José Hernández", 1872);
gestorLibro1.agregarLibro("Metamorfosis", "Franz Kafka", 1915);

console.log(gestorLibro1);
