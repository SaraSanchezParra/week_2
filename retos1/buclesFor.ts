


// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizarunafunciónqueimprimalosnúmerosimparesexistenteshastaelnúmero indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
// 3. Realizarunafunciónquecomoparámetrodeentradarecibaunarrayycomosalida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
// 4. Realizarunafunciónquerecibacomoparámetrounarraydestringsquecontenga nombres de colores y te imprima en cada caso si el color está en el arcoíris o no. La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
// 5. Realizarunafunciónquetedevuelvalasumadelnumerodecaracteresdelaspalabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
// 6. SubirloscambiosaGitHub.
console.log ("***IMPARES");
function evenNumbers(num:number){
    for (let i=1; i<num; i++){
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

evenNumbers(10);

console.log("*** REVERTIDO");


function myRevert(myArr: number[]): number[] {
    let reverseArray: number[] = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        reverseArray.push(myArr[i]);
    }
    return reverseArray;
}

let myArray = [1, 2, 3, 4, 5];
console.log(myRevert(myArray));


console.log("****ARCOIRIS");


function isRainbow(colors: string[]) {
    let rainbowColors = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    for (let color of colors) {
        let thisRainbow = rainbowColors.indexOf(color);
        console.log(`El color ${color} ${thisRainbow ? "está" : "no está"} en el arcoiris.`);
    }
}

let colorsArray = ["verde", "rosa"];
isRainbow(colorsArray);

console.log("****SUMA");



function add(myWords: string[]) : number {
    let addition = 0;
    for (let word of myWords) {
        addition += word.length;
    }
    return addition;
}

let myWordsArray = ["Estamos", "en", "Codenotch", "estudiando", "programación"];
let result = add(myWordsArray);
console.log(`El número de caracteres es ${result}`);
