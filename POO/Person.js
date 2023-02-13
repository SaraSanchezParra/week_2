
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
class Person {
    constructor(hight, weight, pelo, colorOjos, yearOfBirth, hobbies){
        this.altura = hight
        this.peso = weight
        this.pelo = pelo
        this.colorOjos = colorOjos
        this.yearOfBirth = yearOfBirth
        this.hobbies = hobbies
        
    }
    calcularIMC (){
        return (this.altura*2)/this.peso;
    }
    calcularEdad(){
        let fechaActual = new Date ();
        return fechaActual.getFullYear() - this.yearOfBirth;
    }
    printAll() {
        console.log("La altura es -" + this.altura);
        console.log("El peso es -" + this.peso);
        console.log("La edad es -" + this.calcularEdad());
        console.log("El color de pelo es-" + this.pelo);
        console.log("El color de ojos es-" + this.colorOjos );
       

    }
    
    printHobbies(){
        console.log("Sus hobbies son -");
        for (let i = 0; i < this.hobbies.length; i++){
            console.log (this.hobbies[i]);
        }
    }

 }



// Reto 6
// • Guardar la clase Person en un fichero con extensión .js (person.js)
// • Modificar ese fichero para exportar la clase.
// export{Person}
// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”.

module.exports = {Person};