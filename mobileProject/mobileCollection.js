"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection() {
        this.mobiles = [];
        this.totalPrice = 0;
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (moviles) {
        this.mobiles = moviles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        var suma = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            suma = suma + this.mobiles[i].getPrice();
        }
        this.totalPrice = suma;
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (precioTotal) {
        this.totalPrice = precioTotal;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
