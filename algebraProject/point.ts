// Reto 1: Clase Point con Typescript
// 1. Trabajar en la rama repaso4, crear una nueva carpeta denominada algebraProject y crear el fichero point.ts.
// 2. DichoficherodebecontenerlaclasePointconlossiguientesatributosprivados: • x: number
// • y: number
// 3. Elconstructordelaclasedebetenerlosmismosparámetrosdeentradaqueatributos.
// 4. Crearlosmétodossettersygettersparatodoslosatributosdelaclase.
// 5. CrearunmétodotoString()queconviertaatextolascoordenadasdelpunto. Debe devolver: “(x,y)”
// 6. EnotroficherodenominadopointTest.tsimportarlaclasePoint.
// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus métodos. Subir los cambios a GitHub.



export class Point {

    private x:number;
    private y:number;

    constructor (x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x;
    }
    public setX(x:number):void{
        this.x = x;
    }
    public getY():number{
        return this.y;
    }
    public setY(y:number):void{
        this.y = y;
    }

    public toString():string{
        return "(" + this.getX() + "," + this.getY() + ")";
    }
    public distanceToOrigin():number{
        return Math.sqrt(this.getX()**2 + this.getY()**2)
    }
    public CalculateDistance(anotherPoint:Point):number{
        let diferenciaDeX = this.getX() - anotherPoint.getX();
        let diferenciaDeY = this.getY() - anotherPoint.getY();
        return Math.sqrt((diferenciaDeX * diferenciaDeX) + (diferenciaDeY * diferenciaDeY))
    }
    public calcularQuadrant():number{
        let variable:number = 0;
        if (this.getX() ==0 || this.getY() ==0 ){
            return variable = 0;
        }
        else if (this.getX() > 0 && this.getY() > 0){
            variable = 1;
        }
        else if (this.getX() < 0 && this.getY() > 0){
            variable = 2;
        }
        else if (this.getX() > 0 && this.getY() > 0){
            variable = 3;
        }
        else if (this.getX() > 0 && this.getY() < 0){
            variable = 4;
        }
        return variable
    }
}

// Reto 2: Métodos de Distancias
// 1. Crear un método denominado distanceTolOrigin():number que devuelva la distancia del punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.
// 2. CrearunmétododenominadocalculateDistance(anotherPoint:Point):number,que devuelva la distancia entre el punto representado por la instancia actual del objeto y otra instancia de Punto que se recibe como parámetro denominada anotherPoint.
// NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.
// 3. ModificarelficheropointTest.tsparaprobarlosnuevosmétodos 4. SubirloscambiosaGitHub.


// Reto 3: Método Calcular Cuadrante
// 1. Programa un método denominado calcularQuadrant():number que devuelva el cuadrante en el que se encuentra el punto.
// El prototipo del método se muestra a continuación:
// - Devuelve 0 si x o y son 0.
// - Devuelve 1 si está en el primer cuadrante (x e y positivos).
// - Devuelve 2 si está en el segundo cuadrante (x negativo e y positivo).
// - Devuelve 3 si está en el tercer cuadrante (x e y negativos).
// - Devuelve 4 si está en el cuarto cuadrante (x positivo e y negativo).
// 2. ModificarelficheropointTest.tsparaprobarestenuevométodo.
// 3. SubirloscambiosaGitHub.


// Reto 4: Calcular el Punto Más Cercano
// 1. Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto de dicho array que esté más cercano al punto actual.
// NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
// 2. ModificarelficheropointTest.tsparaprobarestenuevométodo.
// 3. SubirloscambiosaGitHub.

// Reto 5: Clase Triangle con Typescript
// 1. Dentro de la carpeta actual crear el fichero triangle.ts. Importar en dicho fichero la clase Point.
// 2. DichoficherodebecontenerlaclaseTriangleconlossiguientesatributosprivados:
// • vertex1: • vertex2: • vertex3:
// Point Point Point
// Que corresponden a los vértices de un triángulo.
// 3. Elconstructordelaclasedebetenerlosmismosparámetrosdeentradaqueatributos.
// 4. ProgramaelmétodocalculateLengthSides():number[]quedebedevolverunarraydetresposiciones, cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
// NOTA: Para ello es importante usar el método calculateDistance de la clase Point.
// 5. EnotroficherodenominadotriangleTest.tsimportarlaclaseTriangle.
// 6. CrearunnuevoobjetomyTriangledelaclaseTriangle,enelficheroanterior,yprobartodossus métodos. Subir los cambios a GitHub. Haced merge con la rama main.

