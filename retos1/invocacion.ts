// Reto de Invocación
// Guardar este reto en un nuevo fichero. Ej: invocacion.ts
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes. También tendrás que importar dichos ficheros en el fichero actual.
// Subir los cambios a GitHub. Y hacer merge con la rama principal.

import {add} from "./buclesFor";
import {isEven} from "./condicionales"






let array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3= ["Venezuela", "Veneno", "Voltaje"];

let numeroCaracteres = add(array1);
let resultadoCaracteres = isEven(numeroCaracteres);


numeroCaracteres = add(array2);
resultadoCaracteres = isEven(numeroCaracteres);


numeroCaracteres = add(array3);
resultadoCaracteres = isEven(numeroCaracteres);
