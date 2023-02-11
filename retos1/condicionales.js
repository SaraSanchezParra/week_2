"use strict";
// Retos de Condicionales
// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un fichero .js Ej: condicionales.ts
// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal. La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
// 4. Realizarunafunciónqueteimprimaporconsolaelsiguientemensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// 5. La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
// 6. SubirloscambiosaGitHub.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(day, month) {
    var signoAstral = "";
    if ((day >= 22 && month == 12) || (day <= 20 && month == 1)) {
        signoAstral = ("Capricornio");
    }
    if ((day >= 21 && month == 1) || (day <= 19 && month == 2)) {
        signoAstral = ("Acuario");
    }
    if ((day >= 20 && month == 2) || (day <= 20 && month == 3)) {
        signoAstral = ("Piscis");
    }
    if ((day >= 21 && month == 3) || (day <= 20 && month == 4)) {
        signoAstral = ("Aries");
    }
    if ((day >= 21 && month == 4) || (day <= 21 && month == 5)) {
        signoAstral = ("Tauro");
    }
    if ((day >= 22 && month == 5) || (day <= 21 && month == 6)) {
        signoAstral = ("Géminis");
    }
    if ((day >= 21 && month == 6) || (day <= 23 && month == 7)) {
        signoAstral = ("Cáncer");
    }
    if ((day >= 24 && month == 7) || (day <= 23 && month == 8)) {
        signoAstral = ("Leo");
    }
    if ((day >= 24 && month == 8) || (day <= 23 && month == 9)) {
        signoAstral = ("Virgo");
    }
    if ((day >= 24 && month == 9) || (day <= 23 && month == 10)) {
        signoAstral = ("Libra");
    }
    if ((day >= 24 && month == 10) || (day <= 22 && month == 11)) {
        signoAstral = ("Escorpio");
    }
    if ((day >= 23 && month == 11) || (day <= 21 && month == 12)) {
        signoAstral = ("Sagitario");
    }
    return signoAstral;
}
console.log(zodiac(12, 4));
console.log("****PAÍSES");
function continent(country) {
    if (country == "Marruecos" || country == "Ghana") {
        console.log("África");
    }
    if (country == "Arabia Saudí" || country == "Sri Lanka") {
        console.log("Asia");
    }
    if (country == "Perú" || country == "México") {
        console.log("América");
    }
    if (country == "Australia" || country == "Nueva Zelanda") {
        console.log("Oceanía");
    }
    if (country == "España" || country == "Reino Unido") {
        console.log("Europa");
    }
}
continent("Marruecos");
console.log("****PAR O IMPAR");
function isEven(number) {
    if (number % 2 == 0) {
        console.log("El número  es par");
    }
    else {
        console.log("El número es impar");
    }
}
exports.isEven = isEven;
isEven(4);
