// Reto 6: Clase Library
// Crear la Clase Library con la siguiente estructura:
// • Atributos Privados:
// - books: array of Book
// - address: string
// - manager: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para los atributos address y manager. - toString (): string.
// Devuelve un string con TODA la información de todos los libros de la biblioteca con la siguiente estructura :
// “Book1:
// Title – Introducción a Javascript Numer of Pages- 233
// IBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions.......”
// Reto 6: Clase Library (Cont)
// - getNumberOfBooks ():number.
// Devuelve el numero de libros de la biblioteca.
// - findByAuthor (author:string):Book[].
// Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
// del método.
import { Book } from "./book";


export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

constructor(direccion: string, manager:string){
    this.books = [];
    this.address = direccion;
    this.manager = manager;
     
}
public getBooks(): Book[]{
    return this.books;
}
public getAddress():string{
    return this.address;
}
public setAddress(direccion:string):void{
    this.address = direccion;
}
public getManager():string{
    return this.manager
}
public setManager(manager:string):void{
    this.manager = manager;
}
public toString():string{
    let resultado:string = "";
    for(let i = 0; i<this.books.length; i++){
        resultado = resultado + "Book " + (i + 1) + "\n" + this.books[i].toString();
    }
    return resultado;
}
public getNumberOfBooks():number{
    return this.books.length
}
public findByAuthor(author:string):Book[]{
    let librosAutor : Book[] = [];
    for (let i=0; i<this.books.length; i++){
        if (this.books[i].getAuthor() == author){
            librosAutor.push(this.books[i])
        }
    }
    return librosAutor;

}
}

// “Book1:
// Title – Introducción a Javascript Numer of Pages- 233
// IBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions.......”