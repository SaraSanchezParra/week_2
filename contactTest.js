
// • Modificar ese fichero para exportar la clase. Importar la clase en otro fichero denominado
// contactsTest.js.
let {Contacts} = require("./contacts");
let {Person} = require("./Person");

let ana = new Person(180, 80, "azul", "marrones", 1978, []);
ana.hobbies = ['Leer', 'Cantar', 'Bailar'];

let juan = new Person(175, 69, "gris", "verdes", 1960, []);
juan.hobbies =['Nadar','Jugar'];


let agenda = new Contacts();
agenda.contactos.push(ana)
agenda.contactos.push(juan) //es lo mismo que utilizar ,,console.log(agenda.contactos),,;


for (let i=0; i<agenda.contactos.length; i++){
    console.log(agenda.contactos[i]);
}

// • Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1” y después haz ”merge” con tu rama “master/main”. En caso de tener conflicto soluciónalos.
// • Haz una versión de esta subida.


