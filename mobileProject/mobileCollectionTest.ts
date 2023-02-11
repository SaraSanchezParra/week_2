
// 5. EnotroficherodenominadomobileCollectionTest.tsimportarlaclaseMobileCollection.
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado previamente y comprobar todos sus métodos.
// 8. SubirloscambiosaGitHub.

// 1. Crear un método privado denominado totalPriceCalculation sin parámetros de entrada, que te calcule el precio total de la colección.
// NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el atributo mobiles.
// 2. EnelconstructorllamartotalPriceCalculationyguardarloensuatributocorrespondiente.
// 3. ProbardenuevoelmétodogetPricedelaclaseenelficheromobileCollectionTest.ts
// 4. SubirloscambiosaGitHub.


import { MobileCollection } from "./mobileCollection";

import { Mobile } from "./mobile";

let arrayMobiles1:Mobile[] = [];

let myMobile = new Mobile ("Iphone", "Apple", "14", "Silver", 899);

let myMobile2 = new Mobile ("Galaxy", "Samsung", "Z Flip", "Purple", 1099);

let myMobile3 = new Mobile ("Redmi", "Xiaomi", "Note", "Black", 279);

let myMobile4 = new Mobile ("10 pro", "One Plus", "Plus", "White", 1200);

arrayMobiles1.push(myMobile);
arrayMobiles1.push(myMobile2);
arrayMobiles1.push(myMobile3);
arrayMobiles1.push(myMobile4);

let myCollection = new MobileCollection();
myCollection.setMobiles(arrayMobiles1);



console.log(myCollection.getTotalPriceCalculation());

