"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.getX = function () {
        return this.x;
    };
    Shape.prototype.setX = function (x) {
        this.x = x;
    };
    Shape.prototype.getY = function () {
        return this.y;
    };
    Shape.prototype.setY = function (y) {
        this.y = y;
    };
    Shape.prototype.toString = function () {
        return "(x: ".concat(this.x, ", y: ").concat(this.y, ")");
    };
    return Shape;
}());
exports.Shape = Shape;
