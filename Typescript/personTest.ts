import { Person } from "./person";

let person1 = new Person("Rosa", 18, "Calle Hilados");
console.log(person1);
person1.printName();
console.log(person1.getAddress());
console.log(person1.yearOfBirth(2023));


let person2 : Person = new Person("Rosa", 65, "Calle Cruz");
person2.printName();
console.log(person2.getAddress());
person2.setAddress("Calle Amanecer");
console.log(person2.yearOfBirth(2023));
