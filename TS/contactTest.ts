import { Person } from "./person";
import { Contacts } from "./contacts";

let person1: Person = new Person("Rosa", 18, "Calle Hilados");
person1.setAddress("Calle Nueva");


let person2 : Person = new Person("Maria", 65, "Calle Cruz");
person2.setAddress("Calle New");


let agenda : Contacts = new Contacts();
agenda.people.push(person1);
agenda.people.push(person2);
agenda.printCalendar();

