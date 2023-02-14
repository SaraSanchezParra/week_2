// Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2 dentro de la carpeta creada en el reto anterior crear el fichero mobileCollection.ts
// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados: • mobiles: Mobile[]
// • totalPrice: number
// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.
// 4. Crearlosmétodossettersygettersparatodoslosatributosdelaclase.
// 5. EnotroficherodenominadomobileCollectionTest.tsimportarlaclaseMobileCollection.
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado previamente y comprobar todos sus métodos.
// 8. SubirloscambiosaGitHub.
import { Mobile } from "./mobile"

export class MobileCollection {
    private mobiles: Mobile[];
    private totalPrice: number;


    constructor (Mobiles: Mobile[]){
        this.mobiles = Mobiles;
        this.totalPrice = this.totalPriceCalculation()
        ;

    }

    public getMobiles(): Mobile[]{
        return this.mobiles;
    }
    public setMobiles(mobiles:Mobile[]):void{
        this.mobiles = mobiles; 
    }
    public getTotalPrice():number{
        return this.totalPrice ;
    }
    public setTotalPrice(precioTotal:number):void{
        this.totalPrice = this.totalPrice
    }
    public totalPriceCalculation(): number{
        let suma = 0; 
        for(let i = 0; i<this.mobiles.length; i++){
            suma = suma + this.mobiles[i].getPrice();
        }
    
        return suma
    }
    public printCollection(){
        for (let movil of this.mobiles){
            console.log(movil.printPattern())
        }
        console.log("Price overall: " + this.getTotalPrice())
        }
}

