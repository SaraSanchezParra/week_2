


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
    let rainbowColors= ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    for (let i = 0; i<colors.length; i++){
        if (rainbowColors.indexOf(colors[i])!= -1){
            console.log(`${colors[i]} está en el arcoiris`);
    } else {
            console.log(`${colors[i]} no está en el arcoiris`);
    }
        }
    }

isRainbow(["rosa", "azul"])

console.log("****SUMA");

function add(myWords: string[]) {
    let addition:number = 0;
    for (let i=0; i<myWords.length; i++) {
       let caracteres:number = myWords[i].length;
       addition += caracteres //(addition=addition+caracteres)
    }
    return addition;
}

console.log(add(["Juan", "Rosa"]))
