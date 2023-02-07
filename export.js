let {person} = require("./Person");

let ana = new person(180, 80);
ana.aNac = 1980;
ana.hobbies = ['Leer', 'Cantar', 'Bailar'];
console.log(ana.calcularIMC());
console.log("La edad es -" + ana.calcularEdad(2023));
console.log(ana.printAll());
ana.printHobbies();



// let ana = new Person(1.80, 80);
// console.log(ana.calcularIMC());

// console.log("****AÑO NACIMIENTO")

// ana.aNac = 1980;

// ana.printAll();
// ana.hobbies = ['Leer', 'Cantar', 'Bailar'];
// ana.printHobbies();
// console.log(ana.printAll)