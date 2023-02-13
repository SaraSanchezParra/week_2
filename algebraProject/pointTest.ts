import { Point } from  "./point"

let myPoint = new Point (3, 6)
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(5);
myPoint.setY(8);
console.log(myPoint.toString());