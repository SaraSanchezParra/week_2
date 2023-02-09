// Reto 1: Clase Person
// 1. Para los retos de hoy trabajaremos, en el repositorio “Week_2”, creado ayer, desde la rama “dia2”. Se creará una nueva carpeta llamada “Typescript” y los ficheros .js se deben incorporar al .gitignore.
// 2. Crear la Clase Person con la siguiente estructura:
// • Atributos Públicos: - name: string
// - age: number
// • Atributos Privados:
// - address: string
// • Constructor para todos los atributos
// • Metodos Públicos:
// - printName(). Imprime por consola el nombre
// - yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento - setAddress(address:string). Modifica el atributo address con el valor pasado como parámetro.
// - getAddress():string. Devuelve el valor del atributo addess.

export class Person {

    public name: string;
    public age: number;
    private address: string;

    constructor(nombre:string, edad:number, direccion:string){
        this.name = nombre;
        this.age = edad;
        this.address = direccion;
    }
    public getAddress():string{
        return this.address
    }
    public setAddress(newaddress:string):void{
        this.address = newaddress;
    }
    printName(){
        console.log(this.name);
         
    }
    // yearOfBirth(currentYear:number):number{
    //     let fechaActual= new Date ();
    //     return currentYear.getFullYear() - this.age;
    // }
    
    yearOfBirth(currentYear:number):number{
            return currentYear - this.age
    }

    
}

// let person1 = new Person("Rosa", 18, "Calle Hilados");
// console.log(person1);
// let person2 : Person = new Person("Rosa", 65, "Calle Cruz");
// console.log(person2.getAddress());
// person2.setAddress("Calle Amanecer");
// console.log(person2.getAddress());
// console.log(person1.yearOfBirth(2023))


