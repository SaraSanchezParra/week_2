import { Library } from "./library";
import { Book } from "./book";

let miLibreria = new Library("Calle Nose", "Juan Pepito");
let book1: Book = new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2: Book = new Book("Introducción a la llamada", 2800, "2236789-BCJJHH333", "Juan Santos", "El barco de vapor");
let book3: Book = new Book("Los renglones torcidos de Dios", 378, "456798-JHI980096", "Torcuato Luca de Tena", "Libsa")
miLibreria.getBooks().push(book1);
miLibreria.getBooks().push(book2);
miLibreria.getBooks().push(book3);

console.log(miLibreria.toString());

console.log("El número de libros es " + miLibreria.getNumberOfBooks());

let librosPorAutor: Book [] = miLibreria.findByAuthor("Juan Santos");
console.log(librosPorAutor)