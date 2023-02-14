// 5. EnotroficherodenominadotriangleTest.tsimportarlaclaseTriangle.
// 6. CrearunnuevoobjetomyTriangledelaclaseTriangle,enelficheroanterior,yprobartodossus métodos. Subir los cambios a GitHub. Haced merge con la rama main.

import { Triangle } from "./triangle";
import { Point } from "./point";



let vertex1 = new Point (3, 6);
let vertex2 = new Point (-4, 8);
let vertex3 = new Point(-3, 4);

let triangulo: Triangle = new Triangle (vertex1, vertex2, vertex3)

console.log(triangulo.calculateLengthSides());