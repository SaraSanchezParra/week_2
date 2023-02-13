import { Book } from "./book";


let book1: Book = new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(book1.getTitle());
console.log(book1.getPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());



book1.setTitle("Origen");
book1.setPages(544);
book1.setIsbn("es645478393838");
book1.setAuthor("José Saramago");
book1.setEditorial("Anaya");




console.log(book1.toString());
// “Title – Introducción a Javascript Numer of Pages - 233
// ISBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions"
