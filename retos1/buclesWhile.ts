// Retos de Bucles While
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
// 3. Realizarunafunciónquerecibaunarraydenombresytedevuelvaverdaderosiysolosi todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
// 4. Subir los cambios a GitHub.



function hasEven(myNums:number[]){
    let i:number = 0;
    let result:string = ""

    while(i<myNums.length&&myNums[i] % 2 == 0){
       myNums[i]
        i++
    }
    if (i<myNums.length){

    return result
}
}

console.log(hasEven([2, 3, 1, 7]));


console.log("****ARRAY NOMBRES")

function starWithM(myNames:string[]):boolean{
    let resultado:boolean = true;
    let i= 0;
    while(i<myNames.length && resultado == true){
        if (myNames[i].charAt(0)!= 'M'){
            resultado = false;
        }
        i++;
    }
    return resultado;
}

console.log(starWithM(["Margarita", "Miguel"]));