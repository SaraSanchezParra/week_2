// Reto 8
// • Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
//Crear un método llamado printPersons que imprima cada uno de los atributos de cada objeto Person.
 
class Contacts {
    constructor(){
        this.contactos = []
    }
    printPersons(){
     for (let i = 0; i < this.contactos.length; i++){
            console.log (this.contactos[i]);
        }
    }
}




module.exports = {Contacts};

