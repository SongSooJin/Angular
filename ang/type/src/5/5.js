var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.names = ["A", "B"];
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    Greeter.prototype.print = function (names) {
    };
    return Greeter;
}());
var greeter = new Greeter('Everybody');
console.log(greeter);
var result = greeter.greet();
console.log(result);
//# sourceMappingURL=5.js.map