import { Point } from  "./point"

let myPoint = new Point (3, 6);
let myPoint2 = new Point (-4, 8);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(4);
myPoint.setY(4);
console.log(myPoint.toString());

myPoint.CalculateDistance(myPoint2);
console.log(myPoint.CalculateDistance(myPoint2));
console.log(myPoint.calcularQuadrant());

let myPoint1 = new Point(-3, 4);

let points: Point[] = [myPoint1, myPoint2, myPoint];


let origin = new Point (0, 0)
console.log(origin.calculateNearest(points))