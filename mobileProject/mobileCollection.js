"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection() {
        this.mobiles = [];
        this.totalPrice = 0;
        this.totalPriceCalculation = 0;
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (moviles) {
        this.mobiles = moviles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (precioTotal) {
        this.totalPrice = precioTotal;
    };
    MobileCollection.prototype.getTotalPriceCalculation = function () {
        var suma = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            suma = suma + this.mobiles[i].getPrice();
        }
        this.totalPriceCalculation = suma;
        return this.totalPriceCalculation;
    };
    MobileCollection.prototype.setTotalPriceCalculation = function () {
        this.totalPriceCalculation = this.totalPriceCalculation;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
