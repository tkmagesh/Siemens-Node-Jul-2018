var Accumulator = /** @class */ (function () {
    function Accumulator() {
        this.result = 100;
    }
    Accumulator.prototype.add = function (x) {
        this.result += x;
    };
    Accumulator.prototype.subtract = function (x) {
        this.result -= x;
    };
    Accumulator.prototype.multiply = function (x) {
        this.result -= x;
    };
    Accumulator.prototype.divide = function (x) {
        this.result -= x;
    };
    Accumulator.prototype.getResult = function () {
        return this.result;
    };
    return Accumulator;
}());
module.exports = Accumulator;
