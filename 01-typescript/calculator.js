var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add() {
    function parseArg(n) {
        if (Array.isArray(n))
            return add.apply(undefined, n);
        if (typeof n === 'function')
            return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n, 10);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1));
}
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FullTimeEmployee;
}(Employee));
