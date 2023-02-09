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
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        var thisRainbow = rainbowColors.indexOf(color);
        console.log("El color ".concat(color, " ").concat(thisRainbow ? "está" : "no está", " en el arcoiris."));
    }
}
var colorsArray = ["verde", "rosa"];
isRainbow(colorsArray);
console.log("****SUMA");
function add(myWords) {
    var addition = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var word = myWords_1[_i];
        addition += word.length;
    }
    return addition;
}
var myWordsArray = ["Estamos", "en", "Codenotch", "estudiando", "programación"];
var result = add(myWordsArray);
console.log("El n\u00FAmero de caracteres es ".concat(result));
