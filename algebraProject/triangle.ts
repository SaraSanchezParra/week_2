import { Point } from "./point";

// Reto 5: Clase Triangle con Typescript
// 1. Dentro de la carpeta actual crear el fichero triangle.ts. Importar en dicho fichero la clase Point.
// 2. DichoficherodebecontenerlaclaseTriangleconlossiguientesatributosprivados:
// • vertex1: • vertex2: • vertex3:
// Point Point Point
// Que corresponden a los vértices de un triángulo.
// 3. Elconstructordelaclasedebetenerlosmismosparámetrosdeentradaqueatributos.
// 4. ProgramaelmétodocalculateLengthSides():number[]quedebedevolverunarraydetresposiciones, cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
// NOTA: Para ello es importante usar el método calculateDistance de la clase Point.


export class Triangle {


    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;


    constructor (vertex1:Point, vertex2:Point, vertex3:Point){


        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    public getVertex1 (): Point{
        return this.vertex1
    }

    public setVertex1 (vertex1:Point):void{
        this.vertex1 = vertex1
    }

    public getVertex2 (): Point{
        return this.vertex2
    }

    public setVertex2 (vertex2:Point):void{
        this.vertex2 = vertex2
    }

    public getVertex3 (): Point{
        return this.vertex3
    }

    public setVertex3 (vertex3:Point):void{
        this.vertex3 = vertex3
    }
    public calculateLengthSides():number[]{
        let sidesArray:number[] = [];
        sidesArray.push(this.vertex1.CalculateDistance(this.vertex2));
        sidesArray.push(this.vertex2.CalculateDistance(this.vertex3));
        sidesArray.push(this.vertex1.CalculateDistance(this.vertex3));
        return sidesArray
    }

}

