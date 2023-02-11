"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    // public allMobiles()
    Mobile.prototype.toString = function () {
        return "The characteristics of the mobile name are: \n \u00B7Name: ".concat(this.name, "\n \u00B7Trademark: ").concat(this.trademark, "\n \u00B7Model: ").concat(this.model, "\n \u00B7Color: ").concat(this.color, "\n \u00B7Price: ").concat(this.price, "\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
