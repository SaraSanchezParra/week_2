import { Point } from  "./point"

let myPoint = new Point (3, 6);
let myPoint2 = new Point (4, 8);
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(5);
myPoint.setY(8);
console.log(myPoint.toString());

myPoint.CalculateDistance(myPoint2);
console.log(myPoint.CalculateDistance(myPoint2));