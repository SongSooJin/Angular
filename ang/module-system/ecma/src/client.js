"use strict";

var _service = require("./service");

//SyntaxError: Unexpected token export
// 노드컴파일러는 import 키워드를 모름 

console.log((0, _service.add)(2, 3)); // 노드기 채택한 모듈 시스템 기술 코드
// const {add,say} = require("./service");

// ECMA 채택한 모듈 시스템 기술 코드
// ECMA는 자바스크립트 문법을 제정하는 표준기관이다.
// ECMA는 문법을 정하기만 하고 컴파일러를 제공하지 않는다.
// 따라서, 노드 컴파일러가 ECMA의 모듈시스템을 받아 들이지 않고
// 자신만의 모듈시스템을 채택하여 표준문법임에도 노드 컴파일러로
// 수행할때 사용할수 없는 상태이다.

// 앵귤러,리엑트 등의 최신 기술은 ECMA의 표준 문법을 사용하고자 함으로
// 개발자는 코드 작성은 표준문법으로 하고 코드 수행을 하기전에 표준문법을
// 노드가 이해하는 문법으로 변경하여 수행할 코드가 있다.

// 트렌스파일링 : 컴파일러가 이해하는 문법으로 변경하여 코드를 수행하는 작업

console.log((0, _service.say)("Tom"));
//# sourceMappingURL=client.js.map