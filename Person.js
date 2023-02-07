
// Reto 1
// 1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas “dia1”, “dia2” etc..
// 2. Paralosretosdehoytrabajaremosdesdelarama“dia1”.
// 3. CreaunacarpetallamadaPOO,dondeguardaremostodoslosretosdehoy.
// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.
// Reto 2
// Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la clase.
// Reto 3
// Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome como parámetro el año y calcule la edad de la persona.
// Reto 4
// Añadir un método que se denomine printAll que muestre por consola cada uno de los atributos de la clase Person seguido por “-” y el valor del atributo.

// Reto 5
// Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método denominado printHobbies, que muestre por consola las aficiones de la persona.
class person {
    constructor(hight, weight){
        this.altura = hight
        this.peso = weight
        this.pelo
        this.colorOjos
        this.aNac
        this.hobbies
        this.estadoCivil
        this.personalidad
    }
    calcularIMC (){
        return (this.altura*2)/this.peso;
    }
    calcularEdad(year){
        return year - this.aNac
    }
    printAll() {
        console.log("La altura es -" + this.altura);
        console.log("El peso es -" + this.peso);
        console.log("La edad es -" + this.aNac)
    }
    
    printHobbies(){
        for (let i = 0; i < this.hobbies.length; i++){
            console.log("Sus hobbies son -" + this.hobbies[i]);
        }
    }

 }

// console.log("****IMC")

// let ana = new person(1.80, 80);
// console.log(ana.calcularIMC());

// console.log("****AÑO NACIMIENTO")

// ana.aNac = 1980;


// console.log("****PRINT ALL");

// ana.printAll();
// ana.hobbies = ['Leer', 'Cantar', 'Bailar'];
// ana.printHobbies();
// console.log(ana.printAll)


// Reto 6
// • Guardar la clase Person en un fichero con extensión .js (person.js)
// • Modificar ese fichero para exportar la clase.
// export{Person}
// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”.

module.exports = {person};