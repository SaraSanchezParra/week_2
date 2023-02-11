"use strict";
// 5. EnotroficherodenominadomobileCollectionTest.tsimportarlaclaseMobileCollection.
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado previamente y comprobar todos sus métodos.
// 8. SubirloscambiosaGitHub.
Object.defineProperty(exports, "__esModule", { value: true });
var mobileCollection_1 = require("./mobileCollection");
var mobile_1 = require("./mobile");
var arrayMobiles1 = [];
var myMobile = new mobile_1.Mobile("Iphone", "Apple", "14", "Silver", 899);
var myMobile2 = new mobile_1.Mobile("Galaxy", "Samsung", "Z Flip", "Purple", 1099);
var myMobile3 = new mobile_1.Mobile("Redmi", "Xiaomi", "Note", "Black", 279);
var myMobile4 = new mobile_1.Mobile("10 pro", "One Plus", "Plus", "White", 1200);
arrayMobiles1.push(myMobile);
arrayMobiles1.push(myMobile2);
arrayMobiles1.push(myMobile3);
arrayMobiles1.push(myMobile4);
var myCollection = new mobileCollection_1.MobileCollection();
myCollection.setMobiles(arrayMobiles1);
console.log(myCollection.getTotalPrice());
