import { Vector } from "./vector";

let array : Vector = new Vector(7, 10);
let v1 : Vector = new Vector(7, 9);

console.log(array.add1(v1));
console.log(array.subs(v1));
console.log(array.mult(v1));
console.log(array.multNumber(7));
console.log(v1.multNumber(7))