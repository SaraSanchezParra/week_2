// Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y crear el fichero mobile.ts.
// Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
// • name:
// • trademark: • model:
// • color:
// • price:
// string string string string number
// 2. Elconstructordelaclasedebetenerlosmismosparámetrosdeentradaqueatributos.
// 3. Crearlosmétodossettersygettersparatodoslosatributosdelaclase.




export class Mobile {
    
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor (name:string, trademark:string, model:string, color:string, price:number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    public getName():string{
        return this.name
    }
    public setName(name:string):void{
        this.name = name;
    }
    
    public getTrademark():string{
        return this.trademark
    }
    public setTrademark(trademark:string):void{
        this.trademark = trademark;
    }

    public getModel():string{
        return this.model
    }
    public setModel(model:string):void{
        this.model = model;
    }

    public getColor():string{
        return this.color
    }
    public setColor(color:string):void{
        this.color = color;
    }

    public getPrice():number{
        return this.price
    }
    public setPrice(price:number):void{
        this.price = price;
    }
    // public allMobiles()

    public toString():string{
        return `The characteristics of the mobile name are: \n ·Name: ${this.name}\n ·Trademark: ${this.trademark}\n ·Model: ${this.model}\n ·Color: ${this.color}\n ·Price: ${this.price}\n`;
   
    }
}