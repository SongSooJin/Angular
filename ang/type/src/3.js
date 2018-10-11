// constructor에서  this.color 라고 사용하기 전에 클래스 밑으로
// 해당 프로퍼티를 멤버변수처럼 선언해 놓고 사용해야 한다.
var Car = /** @class */ (function () {
    function Car(color) {
        if (color === void 0) { color = "Red"; }
        this.color = color;
    }
    return Car;
}());
var car = new Car();
console.log(car.color);
//# sourceMappingURL=3.js.map