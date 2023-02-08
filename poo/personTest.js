let {Person} = require("./Person");

let ana = new Person(180, 80, "azul", "marrones", 1978, ["Beber", "Cantar"] );

console.log(ana.calcularEdad());
console.log(ana.calcularIMC());
ana.printAll();
ana.printHobbies();

