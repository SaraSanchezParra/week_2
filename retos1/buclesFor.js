"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizarunafunciónqueimprimalosnúmerosimparesexistenteshastaelnúmero indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
// 3. Realizarunafunciónquecomoparámetrodeentradarecibaunarrayycomosalida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
// 4. Realizarunafunciónquerecibacomoparámetrounarraydestringsquecontenga nombres de colores y te imprima en cada caso si el color está en el arcoíris o no. La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
// 5. Realizarunafunciónquetedevuelvalasumadelnumerodecaracteresdelaspalabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
// 6. SubirloscambiosaGitHub.
console.log("***IMPARES");
function evenNumbers(num) {
    for (var i = 1; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
evenNumbers(10);
console.log("*** REVERTIDO");
function myRevert(myArr) {
    var reverseArray = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        reverseArray.push(myArr[i]);
    }
    return reverseArray;
}
var myArray = [1, 2, 3, 4, 5];
console.log(myRevert(myArray));
console.log("****ARCOIRIS");
function isRainbow(colors) {
    var rainbowColors = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    for (var i = 0; i < colors.length; i++) {
        if (rainbowColors.indexOf(colors[i]) != -1) {
            console.log("".concat(colors[i], " est\u00E1 en el arcoiris"));
        }
        else {
            console.log("".concat(colors[i], " no est\u00E1 en el arcoiris"));
        }
    }
}
isRainbow(["rosa", "azul"]);
console.log("****SUMA");
function add(myWords) {
    var addition = 0;
    for (var i = 0; i < myWords.length; i++) {
        var caracteres = myWords[i].length;
        addition += caracteres; //(addition=addition+caracteres)
    }
    return addition;
}
exports.add = add;
console.log(add(["Juan", "Rosa"]));
