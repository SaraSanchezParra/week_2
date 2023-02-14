// Crear la Clase Vector con la siguiente estructura:
// • Atributo Privado:
// - elements: array of numbers.
// • El Constructor debe contener los siguientes parámetros:
// - n: number. Longitud del vector.
// - k: number. Máximo valor de los elementos del vector.
// Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.
// • Metodos Públicos:
// - print(). Imprime por consola el vector.
// - add(v1:Vector):Vector. Realiza la suma de elements con v1.
// - subs(v1:Vector):Vector. Realiza la resta de elements con v1.
// - mult(v1:Vector):Vector. Realiza el producto de elements y v1.
// - multNumber(n:number):Vector. Realiza el producto entre elements y el número n.

// terminarrrrrrr!!!! by Menchu!!!
export class Vector {
    private elements: number[];
    

    constructor(longitud:number, maxVector:number){
     this.elements = [];
     for(let i = 0; i < longitud; i++){
        this.elements.push(Math.round(Math.random() * maxVector))
     }

    }

    public print(){
        return this.elements
    }
    public add1(v1:Vector):Vector{
        let vectorPrincipal:Vector = new Vector(0, 0);
        if (v1.elements.length == this.elements.length){
            for(let i = 0; i < this.elements.length; i++){
                vectorPrincipal.elements.push(this.elements[i] + v1.elements[i]) 
            }
        }
        return vectorPrincipal
    }
    public subs(v1:Vector):Vector{
        let vectorPrincipal:Vector = new Vector(0, 0);
        if (v1.elements.length == this.elements.length){
            for(let i = 0; i < this.elements.length; i++){
                vectorPrincipal.elements.push(this.elements[i] - v1.elements[i]) 
            }
        }
        return vectorPrincipal
    }
    public mult(v1:Vector):Vector{
        let vectorPrincipal:Vector = new Vector(0, 0);
        if (v1.elements.length == this.elements.length){
            for(let i = 0; i < this.elements.length; i++){
                vectorPrincipal.elements.push(this.elements[i] * v1.elements[i]) 
            }
        }
        return vectorPrincipal
    }
    public multNumber(longitud:number):Vector{
        let vectorPrincipal:Vector = new Vector(0, 0);
        if (longitud == this.elements.length){
            for(let i = 0; i < this.elements.length; i++){
                vectorPrincipal.elements.push(this.elements[i] * longitud) 
            }
        }
        return vectorPrincipal
 
 }
}




//Créame un vector de 0 números a K//En el propio constructor igual que damos un valor,
// podemos crear cosas. El array de elementos tiene que estar dentro del constructor
//para que cada vez que genero un vector, de la clase vector, el constructor me genere un vector. 

// function crearVector (n, m) {
   
//     let numero1 = [];

//     for (let i = 0; i <= n; i++)  {
        
//         numero1.push(Math.round(Math.random() * m));
      
//     }
//     console.log(numero1);
// }
// crearVector(5, 8);
