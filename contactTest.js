
// • Modificar ese fichero para exportar la clase. Importar la clase en otro fichero denominado
// contactsTest.js.
let {Contact} = require("./contacts");
let {Person} = require("./Person");

let ana = new Person(180, 80);
ana.aNac = 1980;
ana.hobbies = ['Leer', 'Cantar', 'Bailar'];

let juan = new Person(175, 69);
juan.aNac = 1988;
juan.hobbies =['Nadar','Jugar'];


let agenda = new Contact();
agenda.contactos.push(ana)
agenda.contactos.push(juan) //es lo mismo que utilizar ,,console.log(agenda.contactos),,;




// • Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1” y después haz ”merge” con tu rama “master/main”. En caso de tener conflicto soluciónalos.
// • Haz una versión de esta subida.


