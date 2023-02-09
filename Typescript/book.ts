// Reto 4: Clase Book
// Crear la Clase Book con la siguiente estructura:
// • Atributos Privados: - title: string
// - nPages: number - isbn: string
// - author: string
// - editorial: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para todos los atributos - toString (): string.
// Devuelve un string con TODA la información del libro con la siguiente estructura:
// “Title - Introducción a Javascript Numer of Pages - 233
// ISBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions"

export class Book {
    private title : string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

constructor(titulo:string, paginas:number, codigo:string, autor:string, edit:string){
    this.title = titulo;
    this.nPages = paginas;
    this.isbn = codigo;
    this.author = autor;
    this.editorial = edit;
}
public getTitle(): string{
    return this.title;
}
public setTitle(title:string): void{
    this.title=title;
}
public getPages(): number{
    return this.nPages;
}
public setPages(pages:number): void{
    this.nPages=pages;
}

public getIsbn(): string{
    return this.isbn;
}
public setIsbn(isbn:string):void{
    this.isbn=isbn;
}

public getAuthor(): string{
    return this.author
}

public setAuthor(author:string):void{
    this.author=author
}

public getEditorial():string{
    return this.editorial
}
public setEditorial(editorial:string):void{
    this.editorial=editorial
}
public toString():string{
    return `Title - ${this.title}\n Number of pages - ${this.nPages}\n ISBN - ${this.isbn}\n Author - ${this.author}\n Editorial - ${this.editorial}\n`
}
}
