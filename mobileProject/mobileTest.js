"use strict";
// 4. EnotroficherodenominadomobileTest.tsimportarlaclaseMobile.
// 5. CrearunnuevoobjetomyMobiledelaclaseMobile,enelficheromobileTest.ts,yprobar todos sus métodos.
// 6. SubirloscambiosaGitHub.
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMobile = void 0;
var mobile_1 = require("./mobile");
exports.myMobile = new mobile_1.Mobile("Iphone", "Apple", "14", "Silver", 899);
var myMobile2 = new mobile_1.Mobile("Galaxy", "Samsung", "Z Flip", "Purple", 1099);
var myMobile3 = new mobile_1.Mobile("Redmi", "Xiaomi", "Note", "Black", 279);
console.log("The name of this mobile is " + exports.myMobile.getName());
console.log("Its trademark is " + exports.myMobile.getTrademark());
console.log("Its model is " + exports.myMobile.getModel());
console.log("Its color is " + exports.myMobile.getColor());
console.log("Its price goes over " + exports.myMobile.getPrice() + " if it is brand new.");
console.log("Another mobile phone:");
exports.myMobile.setName("Xiaomi");
exports.myMobile.setTrademark("12");
exports.myMobile.setModel("Pro");
exports.myMobile.setColor("Blue");
exports.myMobile.setPrice(349);
var myMobiles = [exports.myMobile, myMobile2, myMobile3];
for (var i = 0; i < myMobiles.length; i++) {
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
