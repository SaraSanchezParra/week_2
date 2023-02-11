// 4. EnotroficherodenominadomobileTest.tsimportarlaclaseMobile.
// 5. CrearunnuevoobjetomyMobiledelaclaseMobile,enelficheromobileTest.ts,yprobar todos sus métodos.
// 6. SubirloscambiosaGitHub.

import { Mobile } from "./mobile"

export 

let myMobile = new Mobile ("Iphone", "Apple", "14", "Silver", 899);

let myMobile2 = new Mobile ("Galaxy", "Samsung", "Z Flip", "Purple", 1099);

let myMobile3 = new Mobile ("Redmi", "Xiaomi", "Note", "Black", 279);


console.log("The name of this mobile is " + myMobile.getName());

console.log("Its trademark is " + myMobile.getTrademark());

console.log("Its model is " + myMobile.getModel());

console.log("Its color is " + myMobile.getColor());

console.log("Its price goes over " + myMobile.getPrice() + " if it is brand new.");

console.log("Another mobile phone:");

myMobile.setName("Xiaomi");

myMobile.setTrademark("12");

myMobile.setModel("Pro");

myMobile.setColor("Blue");

myMobile.setPrice(349);


let myMobiles = [myMobile, myMobile2, myMobile3];

for (let i = 0; i< myMobiles.length; i++) {
    console.log(myMobiles[i].toString());
}

// 1. Crear un nuevo método que imprima por consola todas las características de la clase siguiendo el siguiente patrón:
// “The characteristics of the mobile name are:”
// • Name:
// • Trademark: • model:
// • Color:
// • Price:
// name tradeMark model color price
// 2. CreartresobjetosdelaclaseMobileenelficheromobileTest.ts.
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
// 4. MostrarlosdatosdemyMobilesinvocandoalmétododelpunto1. 5. SubirloscambiosaGitHub.Yhacermergeconlaramaprincipal.
